import React from 'react'
import styles from './carousel.css'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      previousImage: -1,
      currentImage: 0,
      nextImage: 1
    }
    this.setImage = i => {
      this.setState({
        previousImage: i === 0 ? this.state.imageCount - 1 : i - 1,
        currentImage: i,
        nextImage: i === this.state.imageCount - 1 ? 0 : i + 1
      })
    }
  }
  componentWillReceiveProps = props => {
    if (~~props.images.length) {
      this.setState({
        currentImage: 0,
        previousImage: props.images.length - 1,
        nextImage: 1,
        imageCount: props.images.length
      })
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
          <li>
            <a onClick={() => this.setImage(this.state.previousImage)}
              className={styles.symbol}>{'<'}</a>
          </li>
          <li>
            <img src={this.props.images[this.state.previousImage]}
              onClick={() => this.setImage(this.state.previousImage)}
              className={styles.smallImage} />
          </li>
          <li>
            <img src={this.props.images[this.state.currentImage]}
              className={styles.smallImage} data-selected='true' />
          </li>
          <li>
            <img src={this.props.images[this.state.nextImage]}
              onClick={() => this.setImage(this.state.nextImage)}
              className={styles.smallImage} />
          </li>
          <li>
            <a onClick={() => this.setImage(this.state.nextImage)}
              className={styles.symbol}>{'>'}</a>
          </li>
        </ul>
      </div>
    )
  }
}
