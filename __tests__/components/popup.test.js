import React from 'react'
import ReactDOM from 'react-dom'
// import { shallow } from 'enzyme'
import Popup from '../../src/components/popup.jsx'

describe('Popup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Popup />, div)
  })
})
