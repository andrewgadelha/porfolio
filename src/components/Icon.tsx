// components/Icon.tsx
import { styled } from '../../styled-system/jsx';
import { useEffect, useState, SVGProps, forwardRef } from 'react';
import type { HTMLStyledProps } from '../../styled-system/types';

export type IconStyleConfig = {
  fill?: string;
  stroke?: string;
};

export type GradientConfig = {
  id: string;
  colors: string[];
  type?: 'linear' | 'radial';
  props?: Record<string, string | number>;
};

interface IconBaseProps extends Omit<HTMLStyledProps<'svg'>, 'color'> {
  iconName: string;
  iconStyle?: string | IconStyleConfig;
  gradient?: GradientConfig[];
  size?: string | number | Partial<Record<'base' | 'sm' | 'md' | 'lg' | 'xl', string | number>>;
  children?: React.ReactNode;
}


const RawIcon = forwardRef<SVGSVGElement, IconBaseProps>(({ 
  iconName, 
  iconStyle, 
  gradient, 
  size, 
  children,
  ...props 
}, ref) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [viewBox, setViewBox] = useState('0 0 24 24');
  const [error, setError] = useState<string | null>(null);

  // useEffect COMPLETO - SEM OMISSÕES
  useEffect(() => {
    let isMounted = true;
    setError(null);
  
    const processIcon = async () => {
      try {
        const spriteText = await loadSprite();
        if (!isMounted || !spriteText) return;
  
        const parser = new DOMParser();
        const doc = parser.parseFromString(spriteText, 'image/svg+xml');
        const symbol = doc.getElementById(iconName);
        if (!symbol) throw new Error(`Ícone '${iconName}' não encontrado`);
  
        const clone = symbol.cloneNode(true) as SVGElement;
        
        const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        tempSvg.style.position = 'absolute';
        tempSvg.style.visibility = 'hidden';
        tempSvg.style.width = '0';
        tempSvg.style.height = '0';
        document.body.appendChild(tempSvg);
        tempSvg.appendChild(clone);
  
        let bbox;
        try {
          bbox = (clone as SVGGraphicsElement).getBBox();
        } catch (e) {
          bbox = { x: 0, y: 0, width: 0, height: 0 };
        }
        
        document.body.removeChild(tempSvg);
  
        const newViewBox = bbox.width && bbox.height
          ? `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
          : symbol.getAttribute('viewBox') || '0 0 24 24';
  
        setViewBox(newViewBox);
  
        const idMap = new Map<string, string>();
        if (gradient?.length) {
          const defs = clone.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  
          gradient.forEach(({ id, colors, type = 'linear', props: gradProps = {} }) => {
            const newId = `${id}-${Math.random().toString(36).slice(2, 6)}`;
            idMap.set(id, newId);
  
            const grad = document.createElementNS('http://www.w3.org/2000/svg', `${type}Gradient`);
            grad.id = newId;
  
            const defaultProps = type === 'linear'
              ? { x1: '0%', y1: '0%', x2: '100%', y2: '0%' }
              : { cx: '50%', cy: '50%', r: '50%' };
  
            Object.entries({ ...defaultProps, ...gradProps }).forEach(([key, value]) => {
              grad.setAttribute(key, String(value));
            });
  
            colors.forEach((stopColor, index) => {
              const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
              stop.setAttribute('offset', `${(index * 100) / (colors.length - 1)}%`);
              stop.setAttribute('stop-color', stopColor);
              grad.appendChild(stop);
            });
  
            defs.appendChild(grad);
          });
  
          clone.querySelectorAll('*').forEach(element => {
            ['fill', 'stroke'].forEach(attr => {
              const value = element.getAttribute(attr);
              if (value?.startsWith('url(#')) {
                const oldId = value.split('#')[1].replace(')', '');
                element.setAttribute(attr, `url(#${idMap.get(oldId) || oldId})`);
              }
            });
          });
  
          if (!clone.querySelector('defs')) {
            clone.insertBefore(defs, clone.firstChild);
          }
        }
  
        if (iconStyle) {
          const colors = typeof iconStyle === 'string'
            ? { fill: iconStyle, stroke: iconStyle }
            : iconStyle;
  
          clone.querySelectorAll('path, rect, circle, polygon, line').forEach(element => {
            const applyStyle = (attr: 'fill' | 'stroke') => {
              const value = colors[attr];
              if (!value) return;
              const resolvedValue = value.startsWith('url(#')
                ? value.replace(/#([a-z0-9-]+)/gi, (_, id) => `#${idMap.get(id) || id}`)
                : value;
              element.setAttribute(attr, resolvedValue);
            };
  
            applyStyle('fill');
            applyStyle('stroke');
          });
        }
  
        const serializer = new XMLSerializer();
        const innerContent = Array.from(clone.childNodes)
          .map(child => serializer.serializeToString(child))
          .join('');
        setSvgContent(innerContent);
      } catch (err) {
        console.error('[Icon] Error:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      }
    };
  
    processIcon();
    return () => {
      isMounted = false;
    };
  }, [iconName, iconStyle, gradient]);
  
  if (error) {
    return (
      <div style={{
        border: '1px solid #ff4444',
        padding: '8px',
        color: '#ff4444',
        fontSize: '14px',
        borderRadius: '4px',
        background: '#fff0f0'
      }}>
        [Erro] {error}
      </div>
    );
  }

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...props as SVGProps<SVGSVGElement>}
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      role="img"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        ...props.style,
      }}
    >
      {children && (
        <foreignObject 
          x="0" 
          y="0" 
          width="100%" 
          height="100%"
          style={{ 
            overflow: 'visible',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {children}
          </div>
        </foreignObject>
      )}
    </svg>
  );
});

export const Icon = styled(RawIcon, {
  base: {
    flexShrink: 0,
    lineHeight: '1',
    '& svg': {
      display: 'block',
      height: 'auto',
      maxWidth: '100%',
      width: '100% !important'
    }
  },
  variants: {
    size: {
      auto: {
        w: 'auto',
        h: 'auto'
      }
    }
  }
});

export type IconProps = React.ComponentProps<typeof Icon>;

let spriteCache: string | null = null;
const loadSprite = async (): Promise<string | null> => {
  if (spriteCache) return spriteCache;
  
  try {
    const response = await fetch('src/assets/sprite.svg');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    spriteCache = await response.text();
    return spriteCache;
  } catch (error) {
    console.error('[Icon] Erro ao carregar sprite:', error);
    return null;
  }
};