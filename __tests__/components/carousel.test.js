import React from 'react'
import {mount} from 'enzyme'
import Carousel from '../../src/components/carousel.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Carousel', () => {
  let carousel
  it('renders without crashing', () => {
    carousel = mount(<Carousel images={item.images} />)
  })
  it('it has the images', () => {
    expect(carousel.find('img').length).toEqual(4)
  })
  it('it shows the first image', () => {
    expect(carousel.find('img').first().props().src).toEqual(item.images[0])
    expect(carousel.state().previousImage).toEqual(item.images.length - 1)
    expect(carousel.state().currentImage).toEqual(0)
    expect(carousel.state().nextImage).toEqual(1)
  })
  it('clicking next changes to the next image', () => {
    carousel.find('#next').simulate('click')
    expect(carousel.find('img').first().props().src).toEqual(item.images[1])
    expect(carousel.state().previousImage).toEqual(0)
    expect(carousel.state().currentImage).toEqual(1)
    expect(carousel.state().nextImage).toEqual(2)
  })
  it('clicking previous changes to the previous image', () => {
    carousel.find('#previous').simulate('click')
    expect(carousel.find('img').first().props().src).toEqual(item.images[0])
    expect(carousel.state().previousImage).toEqual(item.images.length - 1)
    expect(carousel.state().currentImage).toEqual(0)
    expect(carousel.state().nextImage).toEqual(1)
  })
  it('clicking the image opens the popup', () => {
    carousel.find('img').first().simulate('click')
    expect(carousel.state().showPopup).toBeTruthy()
  })
  it('clicking close, shuts the popup', () => {
    carousel.find('#close').first().simulate('click')
    expect(carousel.state().showPopup).toBeFalsy()
  })
})
