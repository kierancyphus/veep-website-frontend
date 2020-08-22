import React from 'react'
import { ChooseOption, ChooseOptionProps } from './ChooseOption'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('ChooseOption', () => {
  const props: ChooseOptionProps = {
    title: 'title',
    value: 0,
    toStringMap: {
      1: 'test',
      2: 'another test',
    },
    setValue: jest.fn(),
  }

  it('renders without errors', () => {
    const { container: firstChild } = render(<ChooseOption {...props} />, {
      wrapper: BrowserRouter,
    })

    expect(firstChild).toMatchSnapshot()
  })

  it('calls setValue with the right value on click', () => {
    const { getByText } = render(<ChooseOption {...props} />, {
      wrapper: BrowserRouter,
    })

    fireEvent.click(getByText(props.toStringMap['2']))

    expect(props.setValue).toHaveBeenCalledWith(2)
  })
})
