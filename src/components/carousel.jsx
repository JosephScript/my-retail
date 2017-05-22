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
        <div className={styles.container}>
          {
            this.props.images.length
              ? <img className={styles.currentImage} src={this.props.images[this.state.currentImage]} />
              : ''
          }
        </div>
        <ul>
          {
            this.props.images.map((x, i) => (
              <li key={i}>
                <img src={x}
                  onClick={() => this.setImage(i)}
                  className={styles.smallImage} data-selected={i === this.state.currentImage} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
