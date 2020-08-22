import React from 'react'
import { Box, BoxProps } from '@material-ui/core'
import { Fade } from 'react-reveal'

interface FadeProps {
  left?: boolean
  right?: boolean
  down?: boolean
  cascade?: boolean
}

export const BoxFade: React.ComponentType<BoxProps & FadeProps> = ({
  left,
  right,
  down,
  cascade,
  children,
  margin,
  marginX,
  marginY,
  border,
  borderColor,
  borderRadius,
  padding,
  paddingX,
  paddingY,
  display,
  justifyContent,
  alignItems,
  height,
  width,
}) => (
  <Box
    margin={margin}
    marginX={marginX}
    marginY={marginY}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    padding={padding}
    paddingX={paddingX}
    paddingY={paddingY}
    display={display}
    justifyContent={justifyContent}
    alignItems={alignItems}
    height={height}
    width={width}
  >
    <Fade down={down} left={left} right={right} cascade={cascade}>
      {children}
    </Fade>
  </Box>
)
