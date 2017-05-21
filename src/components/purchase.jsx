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
      <form>
        <div className={styles.quantity}>
          <label className={styles.quantLabel}>quantity:</label>
          <div>
            <a className={styles.countButtons} onClick={this.decrement}>–</a>
            <span className={styles.count}>{this.state.count}</span>
            <a className={styles.countButtons} onClick={this.increment}>+</a>
          </div>
        </div>
        <button type='button' className={styles.formButtons + ' ' + styles.pickup}>Pick Up In Store</button>
        <button type='button' className={styles.formButtons + ' ' + styles.addToCard}>Add To Cart</button>
      </form>
    )
  }
}
