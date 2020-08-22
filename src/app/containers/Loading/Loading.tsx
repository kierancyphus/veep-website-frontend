import React, { FC } from 'react'
import { CircularProgress, Typography } from '@material-ui/core'
import { BoxFade } from '../Common/BoxFade/BoxFade'

export const Loading: FC = () => (
  <BoxFade flex justifyContent="center" down>
    <Typography variant="h1">Loading</Typography>
    <CircularProgress />
  </BoxFade>
)
