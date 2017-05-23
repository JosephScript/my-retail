import React from 'react'
import ReactDOM from 'react-dom'
import Highlights from '../../src/components/highlights.jsx'

describe('Highlights', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Highlights />, div)
  })
})
