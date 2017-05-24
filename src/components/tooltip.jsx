import React from 'react'
import styles from './tooltip.css'
import { Parser } from 'html-to-react'

export default class extends React.Component {
  render () {
    let parser = new Parser()
    return (
      <div className={styles.tooltip}>
        {this.props.text}
        <div className={styles.tooltiptext}>
          {parser.parse(this.props.tooltip)}
        </div>
      </div>
    )
  }
}
