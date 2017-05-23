import React from 'react'
import {shallow} from 'enzyme'
import Carousel from '../../src/components/carousel.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Carousel', () => {
  let carousel
  it('renders without crashing', () => {
    carousel = shallow(<Carousel images={item.images} />)
  })
  it('it has the images', () => {
    expect(carousel.find('img').length).toEqual(item.images.length)
  })
  it('it shows the first image', () => {
    expect(carousel.find('img').first().props().src).toEqual(item.images[0])
  })
  it('clicking next changes to the next image', () => {
    carousel.find('#next').simulate('click')
    expect(carousel.find('img').first().props().src).toEqual(item.images[1])
  })
  it('clicking previous changes to the previous image', () => {
    carousel.find('#previous').simulate('click')
    expect(carousel.find('img').first().props().src).toEqual(item.images[0])
  })
  // it('clicking the image opens the popup', () => {
  //   carousel.find('img').first().simulate('click')
  //   expect(carousel.state().showPopup).toBeTruthy()
  // })
})
