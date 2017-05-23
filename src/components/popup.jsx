import React from 'react'
import styles from './popup.css'

export default class extends React.Component {
  render () {
    return (
      <div className={styles.popup} >
        <div className={styles.content}>
          <a onClick={this.props.close} className={styles.close}>X</a>
          <img className={styles.popupImage} src={this.props.image} />
        </div>
      </div>
    )
  }
}
