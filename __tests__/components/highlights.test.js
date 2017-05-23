import React from 'react'
import {shallow} from 'enzyme'
import Highlights from '../../src/components/highlights.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Highlights', () => {
  let highlights
  it('renders without crashing', () => {
    highlights = shallow(<Highlights
      highlights={item.highlights} />)
  })
  it('it has the highlights', () => {
    expect(highlights.find('li').length).toEqual(item.highlights.length)
  })
})
