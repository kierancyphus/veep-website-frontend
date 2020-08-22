import React, { FC } from 'react'
import { BoxFade } from './BoxFade/BoxFade'
import { Grid, Typography, Card, Box } from '@material-ui/core'
import { Fade } from 'react-reveal'

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
        <Fade down>
          <Card elevation={5}>
            <Box margin={10}>{children}</Box>
          </Card>
        </Fade>
      </Grid>
      <Grid item lg={2} md={1} />
    </Grid>
  )
}
