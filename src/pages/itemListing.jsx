import React from 'react'
import styles from './itemListing.css'
import itemService from '../services/item.js'
import Price from '../components/price.jsx'
import Purchase from '../components/purchase.jsx'
import Highlights from '../components/highlights.jsx'
import Carousel from '../components/carousel.jsx'

export default class ItemListing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      price: [],
      promos: [],
      highlights: [],
      images: []
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
    })
  }
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.itemHeader}>{this.state.title}</h1>
          <Carousel images={this.state.images} />
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
