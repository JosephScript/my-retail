import React from 'react'
import {shallow} from 'enzyme'
import Highlights from '../../src/components/highlights.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Highlights', () => {
  it('renders without crashing', () => {
    shallow(<Highlights
      highlights={item.highlights} />)
  })
})
