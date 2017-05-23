import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from '../../src/components/carousel.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Carousel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Carousel images={item.images} />, div)
  })
})
