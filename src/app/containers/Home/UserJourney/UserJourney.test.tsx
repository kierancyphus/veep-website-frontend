import React from 'react'
import { UserJourney, UserJourneyProps } from './UserJourney'
import { render } from '@testing-library/react'
import { steps } from '../resources'
import { BrowserRouter } from 'react-router-dom'

describe('UserJourney', () => {
  const props: UserJourneyProps = {
    userType: 0,
    projectType: 0,
    steps,
  }

  it('renders without errors', async () => {
    const { container: firstChild } = render(<UserJourney {...props} />, {
      wrapper: BrowserRouter,
    })

    expect(firstChild).toMatchSnapshot()
  })
})
