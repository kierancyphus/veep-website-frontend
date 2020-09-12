import React, { FC } from 'react'
import { BoxFade } from './BoxFade/BoxFade'
import {
  Grid,
  Typography,
  Card,
  Box,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'

export interface BasicPageContainerProps {
  title: string
}

export const BasicPageContainer: FC<BasicPageContainerProps> = ({
  title,
  children,
}) => {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <Grid container>
      <Grid item lg={2} md={1} />
      <Grid item lg={8} md={10}>
        <BoxFade down margin={10}>
          <Typography variant="h1" color="primary">
            {title}
          </Typography>
        </BoxFade>
        <Box paddingX={!isPhone && 2}>
          <Card elevation={5}>
            <Box margin={isPhone ? 2 : 10}>{children}</Box>
          </Card>
        </Box>
      </Grid>
      <Grid item lg={2} md={1} />
    </Grid>
  )
}
