import React from 'react'
import { Home } from './Home'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('ProjectTypes', () => {
  it('renders without errors', () => {
    const { container: firstChild } = render(<Home />, {
      wrapper: BrowserRouter,
    })

    expect(firstChild).toMatchSnapshot()
  })
})
