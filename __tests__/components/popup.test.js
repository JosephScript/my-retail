import React from 'react'
import { shallow } from 'enzyme'
import Popup from '../../src/components/popup.jsx'

describe('Popup', () => {
  it('renders without crashing', () => {
    shallow(<Popup />)
  })
})
