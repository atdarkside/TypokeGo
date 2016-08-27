import React from 'react'


export default class Top extends React.Component {
  render() {
    return (
      <section className="start-view">
        <div className="title-box">
          <h1>Typoké<span className="padd"></span>Go</h1>
          <p>Type your beats.</p>
          <span className="input-wra">
            <input></input>
            <i className="ion-search"></i>
          </span>
        </div>
      </section>
    )
  }
}
