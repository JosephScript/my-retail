import React from 'react'
import styles from './itemListing.css'
import itemService from '../services/item.js'

export default class ItemListing extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      item: {}
    }
  }

  componentDidMount () {
    itemService.getItem().then(item => {
      this.setState({ item })
    })
  }
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Header!</h1>
          <p>Test</p>
        </div>
        <div className={styles.right}>
          <h2>Header!</h2>
          <p>Price</p>
        </div>
      </div>
    )
  }
}
