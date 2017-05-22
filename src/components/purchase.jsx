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
      if (this.state.count > 1) {
        this.setState({
          count: this.state.count - 1
        })
      }
    }
  }

  render () {
    return (
      <div>
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
        <div className={styles.findInStore}>
          <a href='#'>Find in a store</a>
        </div>
        <div className={styles.returns}>
          <div className={styles.returnLabel}>
            returns
          </div>
          <div className={styles.returnDescription}>
            This item must be returned within 30 days of the ship date. See <a href='#'>return policy</a> for details. Prices, promotions, styles and availability may vary by store and online.
          </div>
        </div>
        <div className={styles.actions}>
          <button>Add to registery</button>
          <button>Add to list</button>
          <button>Share</button>
        </div>
      </div>
    )
  }
}
