import React from 'react'
import { shallow, mount } from 'enzyme'
import ItemListing from '../../src/pages/itemListing.jsx'
import itemdata from '../../__mocks__/item-dataMock.js'

describe('Carousel', () => {
  it('it renders children without crashing', () => {
    mount(<ItemListing item={itemdata} />)
  })

  it('it has the correct title', () => {
    const page = shallow(<ItemListing item={itemdata} />)
    expect(page.find('h1').text()).toEqual('Ninja\u2122 Professional Blender with Single Serve Blending Cups')
  })
})
