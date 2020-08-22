import { getQueryValues } from './getQueryValues'

describe('getQueryValues', () => {
  it('should return {query1: "value1", query2: "value2"} when passed "?query1=value1&query2=value2"', () => {
    const query = '?query1=value1&query2=value2'
    const expected = {
      query1: 'value1',
      query2: 'value2',
    }

    expect(getQueryValues(query)).toMatchObject(expected)
  })
})
