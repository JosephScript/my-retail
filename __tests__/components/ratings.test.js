import React from 'react'
import { shallow } from 'enzyme'
import Ratings from '../../src/components/ratings.jsx'
import item from '../../__mocks__/itemListingMock.js'

describe('Ratings', () => {
  it('renders without crashing', () => {
    shallow(<Ratings
      rating={item.rating}
      totalReviews={item.totalReviews}
      proRating={item.proRating}
      conRating={item.conRating}
      proReview={item.proReview}
      conReview={item.conReview}
      proReviewTitle={item.proReviewTitle}
      conReviewTitle={item.conReviewTitle}
      proReviewDate={item.proReviewDate}
      conReviewDate={item.conReviewDate}
      proReviewName={item.proReviewName}
      conReviewName={item.conReviewName} />)
  })
})
