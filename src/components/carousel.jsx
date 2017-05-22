import React from 'react'
import styles from './carousel.css'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentImage: 0
    }
  }

  render () {
    return (
      <div className={styles.carousel}>
        <h2>product highlights</h2>
        {
          this.props.images.length ? <img src={this.props.images[this.state.currentImage]} /> : ''
        }
        <ul>
          {
            this.props.images.map((x, i) => (
              <li key={i}>
                <img src={x} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
