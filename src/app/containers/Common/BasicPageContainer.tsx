import React, { FC } from 'react'
import { BoxFade } from './BoxFade/BoxFade'
import { Grid, Typography, Card, Box } from '@material-ui/core'

export interface BasicPageContainerProps {
  title: string
}

export const BasicPageContainer: FC<BasicPageContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Grid container>
      <Grid item lg={2} md={1} />
      <Grid item lg={8} md={10}>
        <BoxFade down margin={10}>
          <Typography variant="h1">{title}</Typography>
        </BoxFade>
        <Card elevation={5}>
          <Box margin={10}>{children}</Box>
        </Card>
      </Grid>
      <Grid item lg={2} md={1} />
    </Grid>
  )
}
