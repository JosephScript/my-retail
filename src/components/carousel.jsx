import React from 'react'
import styles from './carousel.css'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentImage: 0
    }
    this.setImage = i => {
      this.setState({ currentImage: i })
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
                <img src={x} onClick={() => this.setImage(i)} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
