import React from 'react'
import styles from './itemListing.css'
import itemService from '../services/item.js'
import Price from '../components/price.jsx'
import Purchase from '../components/purchase.jsx'
import Highlights from '../components/highlights.jsx'
import Carousel from '../components/carousel.jsx'
import Ratings from '../components/ratings.jsx'

export default class ItemListing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      price: [],
      promos: [],
      highlights: [],
      images: [],
      purchasingChannelCode: 0,
      rating: 0,
      totalReviews: 0,
      proRating: 0,
      conRating: 0,
      proReview: '',
      conReview: '',
      proReviewTitle: '',
      conReviewTitle: '',
      proReviewDate: '',
      conReviewDate: '',
      proReviewName: '',
      conReviewName: ''
    }
  }

  componentDidMount () {
    itemService.getItem(this.props.itemId || 0).then(item => {
      this.setState({ title: item.CatalogEntryView[0].title })
      this.setState({ price: item.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue })
      this.setState({ promos: item.CatalogEntryView[0].Promotions.map(p => (p.Description[0].shortDescription)) })
      this.setState({ highlights: item.CatalogEntryView[0].ItemDescription[0].features })
      let images = []
      images.push(item.CatalogEntryView[0].Images[0].PrimaryImage[0].image)
      images = images.concat(item.CatalogEntryView[0].Images[0].AlternateImages.map(x => x.image))
      this.setState({ images: images })
      this.setState({ purchasingChannelCode: item.CatalogEntryView[0].purchasingChannelCode })
      this.setState({ rating: item.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating })
      this.setState({ totalReviews: item.CatalogEntryView[0].CustomerReview[0].totalReviews })
      this.setState({ proRating: item.CatalogEntryView[0].CustomerReview[0].Pro[0].overallRating })
      this.setState({ conRating: item.CatalogEntryView[0].CustomerReview[0].Con[0].overallRating })
      this.setState({ proReview: item.CatalogEntryView[0].CustomerReview[0].Pro[0].review })
      this.setState({ conReview: item.CatalogEntryView[0].CustomerReview[0].Con[0].review })
      this.setState({ proReviewTitle: item.CatalogEntryView[0].CustomerReview[0].Pro[0].title })
      this.setState({ conReviewTitle: item.CatalogEntryView[0].CustomerReview[0].Con[0].title })
      this.setState({ proReviewDate: new Date(item.CatalogEntryView[0].CustomerReview[0].Pro[0].datePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) })
      this.setState({ conReviewDate: new Date(item.CatalogEntryView[0].CustomerReview[0].Con[0].datePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) })
      this.setState({ proReviewName: item.CatalogEntryView[0].CustomerReview[0].Pro[0].screenName })
      this.setState({ conReviewName: item.CatalogEntryView[0].CustomerReview[0].Con[0].screenName })
    })
  }
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.itemHeader}>{this.state.title}</h1>
          <Carousel images={this.state.images} />
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
        <div className={styles.right}>
          <Price price={this.state.price} promos={this.state.promos} />
          <Purchase />
          <Highlights highlights={this.state.highlights} />
        </div>
      </div>
    )
  }
}
