import React from 'react'
import {container} from '../utils'


class Top extends React.Component {
  render() {
    console.log(this.props.lyrics)
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
          <div className="action-link">
            <div><i className="ion-log-in"></i></div>
            <div><i className="ion-trophy"></i></div>
            <div><i className="ion-person"></i></div>
          </div>
        </div>
      </section>
    )
  }
}

export default container(Top)
