import React from 'react'
import { shallow } from 'enzyme'
import Price from '../../src/components/price.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Price', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    shallow(<Price
      price={item.price}
      promos={item.promos} />)
  })
})
