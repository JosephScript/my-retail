import React from 'react'
import ReactDOM from 'react-dom'
import ItemListing from '../../src/pages/itemListing.jsx'
import itemdata from '../../__mocks__/item-dataMock.js'

describe('Carousel', () => {
  it('it renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ItemListing item={itemdata} />, div)
  })
})
