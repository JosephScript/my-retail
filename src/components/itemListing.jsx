import React from 'react'
import styles from './itemListing.css'

export default class ItemListing extends React.Component {
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
