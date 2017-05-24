import React from 'react'
import styles from './carousel.css'
import Popup from './popup.jsx'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      previousImage: props.images.length - 1,
      currentImage: 0,
      nextImage: 1
    }
    this.setImage = i => {
      this.setState({
        previousImage: i === 0 ? props.images.length - 1 : i - 1,
        currentImage: i,
        nextImage: i === props.images.length - 1 ? 0 : i + 1
      })
    }
    this.viewLarger = () => {
      this.setState({ showPopup: true })
    }
    this.closePopup = () => {
      this.setState({ showPopup: false })
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
              ? <a onClick={this.viewLarger}>
                <img className={styles.currentImage} src={this.props.images[this.state.currentImage]} />
              </a>
              : ''
          }
        </div>
        <div className={styles.zoom}>
          <a onClick={this.viewLarger}>
            <i className={styles['icon-zoom']} /> view larger</a>
        </div>
        <ul>
          <li>
            <a id='previous' onClick={() => this.setImage(this.state.previousImage)}
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
            <a id='next' onClick={() => this.setImage(this.state.nextImage)}
              className={styles.symbol}>{'>'}</a>
          </li>
        </ul>
        {
          this.state.showPopup
          ? <Popup image={this.props.images[this.state.currentImage]} close={this.closePopup} />
          : ''
        }
      </div>
    )
  }
}
