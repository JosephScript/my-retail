import React from 'react'
import styles from './purchase.css'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1
    }
    this.increment = () => {
      this.setState({
        count: this.state.count + 1
      })
    }
    this.decrement = () => {
      if (this.state.count) {
        this.setState({
          count: this.state.count - 1
        })
      }
    }
  }

  render () {
    return (
      <div>
        <div className={styles.quantity}>
          <span>quantity:</span>
          <div>
            <a className={styles.buttons} onClick={this.decrement}>-</a>
            {this.state.count}
            <a className={styles.buttons} onClick={this.increment}>+</a>
          </div>
        </div>
      </div>
    )
  }
}
