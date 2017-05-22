import React from 'react'
import styles from './highlights.css'
import { Parser } from 'html-to-react'

export default class extends React.Component {
  render () {
    let highlights = this.props.highlights || []
    var parser = new Parser()
    return (
      <div className={styles.highlights}>
        <h2>product highlights</h2>
        <ul>
          {
            highlights.map((x, i) => (
              <li key={i}>{ parser.parse(x) }</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
