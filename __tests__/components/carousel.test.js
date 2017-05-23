import React from 'react'
import {shallow} from 'enzyme'
import Carousel from '../../src/components/carousel.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Carousel', () => {
  it('renders without crashing', () => {
    shallow(<Carousel images={item.images} />)
  })
})
