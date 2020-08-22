import React from 'react'
import { UserStepContent, UserStepContentProps } from './UserStepContent'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('UserStepContent', () => {
  const props: UserStepContentProps = {
    dates: 'January',
    content: 'this is some content',
    length: 3,
    activeStep: 0,
    setStep: jest.fn(),
    projectType: 0,
    userType: 0,
  }

  it('renders without errors', () => {
    const { container: firstChild } = render(<UserStepContent {...props} />, {
      wrapper: BrowserRouter,
    })

    expect(firstChild).toMatchSnapshot()
  })

  // figure out how to find the chevron

  // it('increments step on right chevron click', () => {
  //   const { getByText } = render(<UserStepContent {...props} />, {
  //     wrapper: Providers,
  //   })
  // })

  // it('decrements step on right chevron click', () => {
  //   const { getByText } = render(<UserStepContent {...props} />, {
  //     wrapper: Providers,
  //   })
  // })

  // it('disables left chevron on first step', () => {
  //   const { getByText } = render(<UserStepContent {...props} />, {
  //     wrapper: Providers,
  //   })
  // })

  // it('disables right chevron on right step', () => {
  //   const { getByText } = render(<UserStepContent {...props} />, {
  //     wrapper: Providers,
  //   })
  // })
})
