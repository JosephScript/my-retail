import React from 'react'
import { shallow } from 'enzyme'
import Popup from '../../src/components/popup.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Popup', () => {
  let popup
  it('renders without crashing', () => {
    popup = shallow(<Popup image={item.images[0]} />)
  })
  it('it has the images', () => {
    expect(popup.find('img').length).toEqual(1)
  })
  it('it shows the correct image', () => {
    expect(popup.find('img').props().src).toEqual(item.images[0])
  })
})
