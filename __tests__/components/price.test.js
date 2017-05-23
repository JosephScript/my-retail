import React from 'react'
import { shallow } from 'enzyme'
import Price from '../../src/components/price.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Price', () => {
  let price
  it('renders without crashing', () => {
    price = shallow(<Price
      price={item.price}
      promos={item.promos} />)
  })
  it('shows the price', () => {
    expect(price.find('#price').text()).toEqual(item.price)
  })
  it('shows the promos', () => {
    expect(price.find('object').length).toEqual(item.promos.length)
  })
})
