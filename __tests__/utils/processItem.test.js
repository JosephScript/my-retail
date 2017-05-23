import processItem from '../../src/utils/processItem.js'
import itemListingMock from '../../__mocks__/itemListingMock.js'
import itemDataMock from '../../__mocks__/item-dataMock.js'

describe('Process Item', () => {
  it('it formats blank objects correctly', () => {
    let item = {
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

    expect(processItem({})).toEqual(item)
  })

  it('it formats items correctly', () => {
    expect(processItem(itemDataMock)).toEqual(itemListingMock)
  })
})
