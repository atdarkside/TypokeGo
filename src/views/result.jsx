import _ from 'lodash'
import React from 'react'
import {container} from '../utils'
import RankingItem from '../components/rankingitem'


class Result extends React.Component {
  constructor() {
    super()
    this.state = {
        ranking: [],
        aho: ''
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3333/api/score/lanking/list/${this.props.params.trackId}`, {mode: 'cors'})
      .then(_.method('json'))
      .then(ranking => this.setState({ranking}))
    fetch('http://localhost:3333/api/score/save', {
      mode: 'cors',
      method: 'POST',
      body: `twitter_id=3100811384&music_id=${this.props.params.trackId}&score=${this.props.params.score}`,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
  }

  componentDidMount() {
      setTimeout(() => $('.result-view').addClass('active'), 300)
  }

  render() {
    return (
      <section className='result-view'>
        <h3 className="min-title">Score Result</h3>
        <div className="all-wra">
          <div className="score-wra">
            <div className="score-box">
              <p className="guid-top">You Score is</p>
              <p className="score-text">{this.props.params.score}</p>
              <i className="ion-ios-game-controller-a"></i>
            </div>
          </div>
          <div className="ranking-wra">
            <ul>
              {this.state.ranking.slice(0, 3).map((data, i) => <RankingItem key={i} rank={i + 1} score={data.score} user="hakakawa20153"/>)}
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
