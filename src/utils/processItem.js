module.exports = (item) => {
  let formattedItem = {
    title: '',
    price: '',
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
  if (item.CatalogEntryView && item.CatalogEntryView.length) {
    let entry = item.CatalogEntryView[0]
    formattedItem.title = entry.title

    if (entry.Images && entry.Images.length) {
      formattedItem.images.push(entry.Images[0].PrimaryImage[0].image)

      if (entry.Images[0].AlternateImages && entry.Images[0].AlternateImages.length) {
        formattedItem.images = formattedItem.images.concat(entry.Images[0].AlternateImages.map(x => x.image))
      }
    }

    if (entry.Offers && entry.Offers.length && entry.Offers[0].OfferPrice && entry.Offers[0].OfferPrice.length) {
      formattedItem.price = entry.Offers[0].OfferPrice[0].formattedPriceValue
    }
    if (entry.Promotions && entry.Promotions.length) {
      formattedItem.promos = entry.Promotions.map(p => (p.Description[0].shortDescription))
    }

    if (entry.ItemDescription && entry.ItemDescription.length) {
      formattedItem.highlights = entry.ItemDescription[0].features
    }

    formattedItem.purchasingChannelCode = entry.purchasingChannelCode

    if (entry.CustomerReview && entry.CustomerReview.length) {
      formattedItem.rating = entry.CustomerReview[0].consolidatedOverallRating
      formattedItem.totalReviews = entry.CustomerReview[0].totalReviews

      if (entry.CustomerReview[0].Pro && entry.CustomerReview[0].Pro.length) {
        formattedItem.proRating = entry.CustomerReview[0].Pro[0].overallRating
        formattedItem.proReview = entry.CustomerReview[0].Pro[0].review
        formattedItem.proReviewTitle = entry.CustomerReview[0].Pro[0].title
        formattedItem.proReviewDate = new Date(entry.CustomerReview[0].Pro[0].datePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        formattedItem.proReviewName = entry.CustomerReview[0].Pro[0].screenName
      }
      if (entry.CustomerReview[0].Con && entry.CustomerReview[0].Con.length) {
        formattedItem.conRating = entry.CustomerReview[0].Con[0].overallRating
        formattedItem.conReview = entry.CustomerReview[0].Con[0].review
        formattedItem.conReviewTitle = entry.CustomerReview[0].Con[0].title
        formattedItem.conReviewDate = new Date(entry.CustomerReview[0].Con[0].datePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        formattedItem.conReviewName = entry.CustomerReview[0].Con[0].screenName
      }
    }
  }
  return formattedItem
}
