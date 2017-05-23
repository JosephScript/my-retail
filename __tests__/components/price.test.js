import React from 'react'
import ReactDOM from 'react-dom'
import Price from '../../src/components/price.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Price', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Price
      price={item.price}
      promos={item.promos} />, div)
  })
})
