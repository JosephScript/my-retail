import React from 'react'
import ReactDOM from 'react-dom'
import Ratings from '../../src/components/ratings.jsx'

describe('Ratings', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Ratings />, div)
  })
})
