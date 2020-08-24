import { Box } from '@material-ui/core'
import React, { FC } from 'react'

// type queries = Record<string, string>

// const getQueryValues = (searchString: string): queries => {
//   const search = searchString.slice(1)
//   const pairs = search.split('&')
//   const rval = {}
//   pairs.forEach((pair) => {
//     const [key, value] = pair.split('=')
//     rval[key] = value
//   })
//   return rval
// }

export const Test: FC = props => {
  return (
    <Box display="flex" justifyContent="center">
      <h1>This is a test</h1>
    </Box>
  )
}
