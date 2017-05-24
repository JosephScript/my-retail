import React from 'react'
import styles from './itemListing.css'
import Price from '../components/price.jsx'
import Purchase from '../components/purchase.jsx'
import Highlights from '../components/highlights.jsx'
import Carousel from '../components/carousel.jsx'
import Ratings from '../components/ratings.jsx'
import processItem from '../utils/processItem.js'

export default class ItemListing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {...processItem(this.props.item)}
  }
  render () {
    return (
      <div className={styles.container}>
        <div>
          <h1 className={styles.itemHeader}>{this.state.title}</h1>
          <Carousel images={this.state.images} />
        </div>
        <div>
          <Price price={this.state.price} promos={this.state.promos} />
          <Purchase />
          <Highlights highlights={this.state.highlights} />
        </div>
        <div>
          <Ratings
            rating={this.state.rating}
            totalReviews={this.state.totalReviews}
            proRating={this.state.proRating}
            conRating={this.state.conRating}
            proReview={this.state.proReview}
            conReview={this.state.conReview}
            proReviewTitle={this.state.proReviewTitle}
            conReviewTitle={this.state.conReviewTitle}
            proReviewDate={this.state.proReviewDate}
            conReviewDate={this.state.conReviewDate}
            proReviewName={this.state.proReviewName}
            conReviewName={this.state.conReviewName} />
        </div>
      </div>
    )
  }
}
