import React from 'react'
import { BoxFade } from './BoxFade'
import { render } from '@testing-library/react'

describe('BoxFade', () => {
  it('renders without errors', () => {
    const { container: firstChild } = render(<BoxFade />)

    expect(firstChild).toMatchSnapshot()
  })
})
