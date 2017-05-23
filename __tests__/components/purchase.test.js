import React from 'react'
import { shallow } from 'enzyme'
import Purchase from '../../src/components/purchase.jsx'

describe('Purchase', () => {
  it('renders without crashing', () => {
    shallow(<Purchase />)
  })
})
