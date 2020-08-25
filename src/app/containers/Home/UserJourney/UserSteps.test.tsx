import React from 'react'
import { UserSteps, UserStepsProps } from './UserSteps'
import { render } from '@testing-library/react'
import { steps } from '../resources'

describe('UserSteps', () => {
  const props: UserStepsProps = {
    activeStep: 0,
    userType: 0,
    projectType: 0,
    stepListKeys: Object.keys(steps),
    isPhone: false,
  }

  it('renders without errors', () => {
    const { container: firstChild } = render(<UserSteps {...props} />)

    expect(firstChild).toMatchSnapshot()
  })
})
