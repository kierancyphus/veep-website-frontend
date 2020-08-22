import React from 'react'
import { Projects } from './Projects'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Projects', () => {
  it('renders without errors', () => {
    const { container: firstChild } = render(<Projects />, {
      wrapper: BrowserRouter,
    })

    expect(firstChild).toMatchSnapshot()
  })
})
