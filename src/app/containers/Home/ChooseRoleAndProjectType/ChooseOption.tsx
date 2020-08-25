import React, { FC } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { WithSetter } from '../resources'
import { WithPhone } from '../Home'

export interface ChooseOptionProps extends WithSetter, WithPhone {
  title: string
  value: number
  toStringMap: Record<string, string>
}

export const ChooseOption: FC<ChooseOptionProps> = ({
  title,
  value,
  setValue,
  toStringMap,
  isPhone,
}) => (
  <Box marginBottom={5}>
    <Box display="flex" justifyContent="center">
      <Typography variant="h6">{title}</Typography>
    </Box>
    <Box
      display={isPhone ? '' : 'flex'}
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
            fullWidth={isPhone}
          >
            {text}
          </Button>
        </Box>
      ))}
    </Box>
  </Box>
)
