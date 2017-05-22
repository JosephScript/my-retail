import React from 'react'
import styles from './price.css'
import svg from '../images/mark.svg'

export default class extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.top}>
          <span className={styles.price}>{this.props.price}</span>
          <span className={styles.priceDescription}> online price</span>
        </div>
        <div className={styles.bottom}>
          {
            this.props.promos.map((x, i) =>
              (<div className={styles.promo} key={i}>
                <object className={styles.mark} type='image/svg+xml' data={svg} />
                <span>{x}</span>
              </div>)
            )
          }
        </div>
      </div>
    )
  }
}
