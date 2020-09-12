import React, { ElementType, FC } from 'react'
import { Grid, Card, Box, useTheme } from '@material-ui/core'
import styled from 'styled-components'
import { WithPhone } from 'types/app'
import { WithTheme } from 'muiTheme'

interface WithIcon {
  Icon?: ElementType
  iconLeft?: boolean
}

interface WithLeft {
  iconLeft: boolean
}

const IconCard = styled(Card)<WithLeft & WithTheme>`
  background: linear-gradient(#71518ab3, #a869f8b3);
`

export const IconGrid: FC<WithIcon & WithPhone> = ({ Icon, iconLeft }) => {
  const theme = useTheme()
  return (
    <>
      {Icon && (
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box
            display="flex"
            alignItems="center"
            height="100%"
            justifyContent="center"
          >
            <IconCard elevation={24} iconLeft={iconLeft || false} theme={theme}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={4}
              >
                <Icon style={{ fontSize: '7.8rem' }} />
              </Box>
            </IconCard>
          </Box>
        </Grid>
      )}
    </>
  )
}
