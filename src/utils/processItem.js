module.exports = (item) => {
  let images = []
  images.push(item.CatalogEntryView[0].Images[0].PrimaryImage[0].image)
  images = images.concat(item.CatalogEntryView[0].Images[0].AlternateImages.map(x => x.image))

  return {
    title: item.CatalogEntryView[0].title,
    price: item.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue,
    promos: item.CatalogEntryView[0].Promotions.map(p => (p.Description[0].shortDescription)),
    highlights: item.CatalogEntryView[0].ItemDescription[0].features,
    images,
    purchasingChannelCode: item.CatalogEntryView[0].purchasingChannelCode,
    rating: item.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating,
    totalReviews: item.CatalogEntryView[0].CustomerReview[0].totalReviews,
    proRating: item.CatalogEntryView[0].CustomerReview[0].Pro[0].overallRating,
    conRating: item.CatalogEntryView[0].CustomerReview[0].Con[0].overallRating,
    proReview: item.CatalogEntryView[0].CustomerReview[0].Pro[0].review,
    conReview: item.CatalogEntryView[0].CustomerReview[0].Con[0].review,
    proReviewTitle: item.CatalogEntryView[0].CustomerReview[0].Pro[0].title,
    conReviewTitle: item.CatalogEntryView[0].CustomerReview[0].Con[0].title,
    proReviewDate: new Date(item.CatalogEntryView[0].CustomerReview[0].Pro[0].datePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    conReviewDate: new Date(item.CatalogEntryView[0].CustomerReview[0].Con[0].datePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    proReviewName: item.CatalogEntryView[0].CustomerReview[0].Pro[0].screenName,
    conReviewName: item.CatalogEntryView[0].CustomerReview[0].Con[0].screenName
  }
}
