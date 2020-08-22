import React from 'react'
import { ProjectTypeCard, ProjectTypeCardProps } from './ProjectTypeCard'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('ProjectTypeCard', () => {
  const props: ProjectTypeCardProps = {
    setProjectType: jest.fn(),
    projectType: 0,
    description: 'description',
    title: 'title',
    links: {
      button: '/path',
    },
  }

  it('renders without errors', () => {
    const { container: firstChild } = render(<ProjectTypeCard {...props} />, {
      wrapper: BrowserRouter,
    })

    expect(firstChild).toMatchSnapshot()
  })

  it('calls setValue with the right value on click', () => {
    const { getByText } = render(<ProjectTypeCard {...props} />, {
      wrapper: BrowserRouter,
    })

    fireEvent.click(getByText(props.description))

    expect(props.setProjectType).toHaveBeenCalledWith(0)
  })
})
