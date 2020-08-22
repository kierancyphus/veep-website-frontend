export type queries = Record<string, string>

export const getQueryValues = (searchString: string): queries => {
  const search = searchString.slice(1)
  const pairs = search.split('&')
  const rval = {}
  pairs.forEach(pair => {
    const [key, value] = pair.split('=')
    rval[key] = value
  })
  return rval
}
