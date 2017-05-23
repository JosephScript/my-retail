import processItem from '../../src/utils/processItem.js'

describe('Process Item', () => {
  it('it formats blank objects correctly', () => {
    let item = {
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

    expect(processItem({})).toEqual(item)
  })
  it('it formats titles correctly', () => {
    let item = {
      CatalogEntryView: [{
        title: 'Mock title'
      }]
    }

    expect(processItem(item).title).toEqual('Mock title')
  })
})
