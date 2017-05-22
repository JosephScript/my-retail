import React from 'react'
import styles from './ratings.css'

export default class extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.overall}>
          <span>
            {this.props.rating} overall
          </span>
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
              {this.props.proRating}
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
              {this.props.conRating}
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
