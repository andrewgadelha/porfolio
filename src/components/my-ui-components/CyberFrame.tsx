import { Box, BoxProps } from "../../../styled-system/jsx"

export interface CyberFrameProps extends BoxProps {
    borderSize?: string
    cornerSize?: string
    border?: string
  }
  
  export const CyberFrame = (props: CyberFrameProps) => {
    const { 
      borderSize = '4px', 
      cornerSize = '16px', 
      border = 'linear-gradient(45deg, #00f7ff 0%, #ff00ff 100%)',
      children,
      ...rest
    } = props
  
    return (
      {children}
    )
  }