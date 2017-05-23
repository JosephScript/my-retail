import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from '../../src/components/carousel.jsx'

describe('Carousel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Carousel />, div)
  })
})
