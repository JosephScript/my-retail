import React from 'react'
import styles from './itemListing.css'
import itemService from '../services/item.js'
import Price from '../components/price.jsx'

export default class ItemListing extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      item: {}
    }
  }

  componentDidMount () {
    itemService.getItem(this.props.itemId || 0).then(item => {
      this.setState({ item: item.CatalogEntryView[0] })
      this.setState({ price: item.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue })
      this.setState({ promos: item.CatalogEntryView[0].Promotions.map(p => (p.Description[0].shortDescription)) })
    })
  }
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.itemHeader}>{this.state.item.title}</h1>
        </div>
        <div className={styles.right}>
          <Price price={this.state.price} promos={this.state.promos} />
        </div>
      </div>
    )
  }
}
