import React from 'react'
import { ProjectTypes, ProjectTypeProps } from './index'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('ProjectTypes', () => {
  const props: ProjectTypeProps = {
    setProjectType: jest.fn(),
    projectTypeToStringMap: { 0: 'string' },
  }

  it('renders without errors', () => {
    const { container: firstChild } = render(<ProjectTypes {...props} />, {
      wrapper: BrowserRouter,
    })

    expect(firstChild).toMatchSnapshot()
  })
})
