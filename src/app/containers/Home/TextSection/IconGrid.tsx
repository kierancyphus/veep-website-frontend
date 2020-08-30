import React, { ElementType, FC } from 'react'
import { Grid, Card, Box } from '@material-ui/core'
import styled from 'styled-components'
import { WithPhone } from '../Home'

interface WithIcon {
  Icon?: ElementType
  iconLeft?: boolean
}

interface WithLeft {
  left: boolean
}

const IconCard = styled(Card)<WithLeft>`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    ${({ left }) => (left ? '135deg' : '225deg')},
    rgba(2, 0, 36, 1) 0%,
    rgba(41, 41, 191, 1) 0%,
    rgba(0, 212, 255, 0.3) 100%
  );
`

export const IconGrid: FC<WithIcon & WithPhone> = ({ Icon, iconLeft }) => (
  <>
    {Icon && (
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <Box
          display="flex"
          alignItems="center"
          height="100%"
          justifyContent="center"
        >
          <IconCard elevation={24} left={iconLeft || false}>
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
