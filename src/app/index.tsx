/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { FC } from 'react'
import { Box, Card, CardHeader } from '@material-ui/core'

export const App: FC = () => {
  return (
    <Box padding={20}>
      <Card elevation={5}>
        <CardHeader title="this is a test" />
      </Card>
    </Box>
  )
}
