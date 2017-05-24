import React from 'react'
import { shallow } from 'enzyme'
import Purchase from '../../src/components/purchase.jsx'

describe('Purchase', () => {
  it('renders without crashing', () => {
    shallow(<Purchase />)
  })
  it('it works with string ints', () => {
    let purchase = shallow(<Purchase purchasingChannelCode={'0'} />)
    expect(purchase.find('#addToCard').length).toEqual(1)
    expect(purchase.find('#pickup').length).toEqual(1)
  })
  it('it shows both the add to cart and pick up in store buttons if purchasingChannelCode equals 0', () => {
    let purchase = shallow(<Purchase purchasingChannelCode={0} />)
    expect(purchase.find('#addToCard').length).toEqual(1)
    expect(purchase.find('#pickup').length).toEqual(1)
  })
  it('it shows ONLY the add to cart button if purchasingChannelCode equals 1', () => {
    let purchase = shallow(<Purchase purchasingChannelCode={1} />)
    expect(purchase.find('#addToCard').length).toEqual(1)
    expect(purchase.find('#pickup').length).toEqual(0)
  })
  it('it show ONLY the pick up in store button if the purchasingChannelCode equals 2.', () => {
    let purchase = shallow(<Purchase purchasingChannelCode={2} />)
    expect(purchase.find('#addToCard').length).toEqual(0)
    expect(purchase.find('#pickup').length).toEqual(1)
  })
})
