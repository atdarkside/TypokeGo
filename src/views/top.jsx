import React from 'react'
import {container} from '../utils'


class Top extends React.Component {
  render() {
    return (
      <section className="start-view">
        <div className="title-box">
          <h1>Typoké<span className="padd"></span>Go</h1>
          <p>Type your beats.</p>
          <span className="input-wra">
            <input></input>
            <span className="candidate">candidate 1</span>
            <span className="candidate">candidate 2</span>
            <span className="candidate">candidate 3</span>
            <i className="ion-search"></i>
          </span>
        </div>
      </section>
    )
  }
}

export default container(Top)
