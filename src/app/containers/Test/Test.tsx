import React, { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

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
  const history = useHistory()
  const location = useLocation()
  console.log('history', history)
  console.log('location', location)
  return <h1>hi</h1>
}
