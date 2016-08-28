import React from 'react'
import {container} from '../utils'


class Result extends React.Component {

  render() {
    return (
      <section className="result-view">
    <h3 className="min-title">Score Result</h3>
    <div className="all-wra">
      <div className="score-wra">
        <div className="score-box">
          <p className="guid-top">You Score is</p>
          <p className="score-text">12975</p>
          <i className="ion-ios-game-controller-a"></i>
        </div>
      </div>
      <div className="ranking-wra">
        <ul>
          <li>
            <h3 className="num">1</h3>
            <p className="score">12973914</p>
            <p className="score-user">reizou05</p>
          </li>
          <li>
            <h3 className="num">2</h3>
            <p className="score">100001</p>
            <p className="score-user">reizou05</p>
          </li>
          <li>
            <h3 className="num">3</h3>
            <p className="score">34667</p>
            <p className="score-user">reizou05</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="action-link">
      <div><i className="ion-log-in"></i></div>
      <div><i className="ion-person-stalker"></i></div>
      <div><i className="ion-ios-home"></i></div>
    </div>
  </section>
    )
  }
}

export default container(Result)
