import React from 'react'
import styles from './purchase.css'
import Tooltip from './tooltip.jsx'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1,
      purchasingChannelCode: parseInt(props.purchasingChannelCode)
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
    this.pickupable = () => (this.state.purchasingChannelCode === 0 || this.state.purchasingChannelCode === 2)
    this.purchaseable = () => (this.state.purchasingChannelCode === 0 || this.state.purchasingChannelCode === 1)
  }

  render () {
    return (
      <div>
        <form>
          <div className={styles.quantity}>
            <label className={styles.quantityLabel}>quantity:</label>
            <div>
              <a className={styles.countButtons} onClick={this.decrement}>–</a>
              <span className={styles.count}>{this.state.count}</span>
              <a className={styles.countButtons} onClick={this.increment}>+</a>
            </div>
          </div>
          {
            this.pickupable()
            ? <button type='button' id='pickup' className={styles.formButtons + ' ' + styles.pickup}>Pick Up In Store</button>
            : ''
          }
          {
            this.purchaseable()
            ? <button type='button' id='addToCard' className={styles.formButtons + ' ' + styles.addToCard}>Add To Cart</button>
            : ''
          }
        </form>
        <div className={styles.findInStore}>
          <a href='#'>find in a store</a>
        </div>
        <div className={styles.returns}>
          <div className={styles.returnLabel}>
            returns
          </div>
          <div className={styles.returnDescription}>
            This item must be returned within 30 days of the ship date. See <Tooltip text='return policy' tooltip={this.props.returnPolicy} /> for details. Prices, promotions, styles and availability may vary by store and online.
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
