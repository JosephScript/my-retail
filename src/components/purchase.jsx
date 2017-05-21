import React from 'react'
import styles from './purchase.css'

export default class extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.quantity}>
          <span>quantity:</span>
          <button className={styles.minus}>-</button>
          <input type='number' min='0' max='200' />
          <button className={styles.plus}>+</button>
        </div>
      </div>
    )
  }
}
