import React, { FC } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { WithSetter } from '../resources'

export interface ChooseOptionProps extends WithSetter {
  title: string
  value: number
  toStringMap: Record<string, string>
}

export const ChooseOption: FC<ChooseOptionProps> = ({
  title,
  value,
  setValue,
  toStringMap,
}) => (
  <Box marginBottom={5}>
    <Box display="flex" justifyContent="center">
      <Typography variant="h6">{title}</Typography>
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignContent="baseline"
      flexWrap="wrap"
    >
      {Object.entries(toStringMap).map(([type, text]) => (
        <Box margin={0.5} key={`choose-${title}-type-${text}`}>
          <Button
            onClick={() => setValue(parseInt(type))}
            variant={value === parseInt(type) ? 'contained' : 'outlined'}
            color="primary"
          >
            {text}
          </Button>
        </Box>
      ))}
    </Box>
  </Box>
)
