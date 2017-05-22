import React from 'react'
import styles from './highlights.css'
import { Parser } from 'html-to-react'

export default class extends React.Component {
  render () {
    var parser = new Parser()
    return (
      <div className={styles.highlights}>
        <h2>product highlights</h2>
        <ul>
          {
            this.props.highlights.map((x, i) => (
              <li key={i}>{ parser.parse(x) }</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
