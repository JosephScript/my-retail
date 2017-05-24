import React from 'react'
import styles from './ratings.css'
import redStar from '../images/star-red.svg'
import star from '../images/star.svg'

export default class extends React.Component {
  getStars = num => {
    let stars = []
    for (let i = 0; i < num; i++) {
      stars.push((<object className={styles.star} key={i} type='image/svg+xml' data={redStar} />))
    }
    for (let j = 0; j < 5 - num; j++) {
      stars.push((<object className={styles.star} key={4 - j} type='image/svg+xml' data={star} />))
    }
    return stars
  }

  render () {
    return (
      <div>
        <div className={styles.overall}>
          <div>
            {this.getStars(this.props.rating)}
            <span>overall</span>
          </div>
          <a href='#'>
            view all {this.props.totalReviews} ratings
          </a>
        </div>
        <div className={styles.ratings}>
          <div className={styles.ratingsTop}>
            <div className={styles.ratingsCell}>
              <div className={styles.title}>
                PRO
              </div>
              <div className={styles.description}>
                most helpful 4-5 star review
              </div>
            </div>
            <div className={styles.ratingsCell}>
              <div className={styles.title}>
                CON
              </div>
              <div className={styles.description}>
                most helpful 1-2 start review
              </div>
            </div>
          </div>
          <div className={styles.ratingsBottom}>
            <div className={styles.ratingsCell}>
              {this.getStars(this.props.proRating)}
              <div className={styles.title}>
                {this.props.proReviewTitle}
              </div>
              <p>
                {this.props.proReview}
              </p>
              <a href='#' className={styles.reviewName}>
                {this.props.proReviewName}
              </a>
              {this.props.proReviewDate}

            </div>
            <div className={styles.ratingsCell}>
              {this.getStars(this.props.conRating)}
              <div className={styles.title}>
                {this.props.conReviewTitle}
              </div>
              <p>
                {this.props.conReview}
              </p>
              <a href='#' className={styles.reviewName}>
                {this.props.conReviewName}
              </a>
              {this.props.conReviewDate}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
