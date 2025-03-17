import { Icon, type IconStyleConfig, type GradientConfig } from './Icon'
import { styled } from '../../styled-system/jsx'
import type { HTMLStyledProps } from '../../styled-system/types'

type FrameIconProps = HTMLStyledProps<'div'> & {
  iconName: string
  w?: string | number | Partial<Record<string, string | number>>
  h?: string | number | Partial<Record<string, string | number>>
  borderWidth?: string | number
  iconStyle?: string | IconStyleConfig
  gradient?: GradientConfig[]
  children?: React.ReactNode
}

const FrameContainer = styled('div', {
  base: {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    boxSizing: 'border-box',
    flexShrink: 0
  }
})

export const FrameIcon = ({ 
  iconName,
  w = 'auto',
  h = 'auto',
  borderWidth = '50px',
  iconStyle,
  gradient,
  children,
  ...props
}: FrameIconProps) => {

  const formatValue = (value: string | number): string => {
    if (value === 'auto') return 'auto'
    return typeof value === 'number' ? `${value}px` : value
  }

  const getResponsiveProp = (value: string | number | Partial<Record<string, string | number>>) => {
    if (typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([key, val]) => [key, formatValue(val as string | number)])
      ) as Record<string, string>
    }
    return formatValue(value)
  }

  const bw = formatValue(borderWidth)

  return (
    <FrameContainer
      {...props}
      w={getResponsiveProp(w)}
      h={getResponsiveProp(h)}
      css={{
        padding: bw,
        display: 'block', // Alterado para block
        position: 'relative'
      }}
    >
      {/* Container do ícone - agora no fluxo normal */}
      <div style={{
        width: '100%',
        height: 'auto',
        zIndex: 0
      }}>
        <Icon
          iconName={iconName}
          iconStyle={iconStyle}
          gradient={gradient}
          css={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>

      {/* Área de conteúdo */}
      <div style={{
        position: 'absolute',
        top: bw,
        left: bw,
        right: bw,
        bottom: bw,
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {children}
      </div>
    </FrameContainer>
  )
}