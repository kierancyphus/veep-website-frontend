import React from 'react'
import {
  ChooseRoleAndProjectType,
  ChooseRoleAndProjectTypeProps,
} from './index'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('ChooseRoleAndProjectType', () => {
  const props: ChooseRoleAndProjectTypeProps = {
    userType: 0,
    projectType: 0,
    userTypeToStringMap: { 0: 'user' },
    projectTypeToStringMap: { 0: 'project' },
    setProjectType: jest.fn(),
    setUserType: jest.fn(),
  }

  it('renders without errors', () => {
    const { container: firstChild } = render(
      <ChooseRoleAndProjectType {...props} />,
      { wrapper: BrowserRouter },
    )

    expect(firstChild).toMatchSnapshot()
  })
})
