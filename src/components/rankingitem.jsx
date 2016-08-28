import React from 'react'


export default class RankingItem extends React.Component {
  static get propTypes() {
    return {
      rank: React.PropTypes.number.isRequired,
      score: React.PropTypes.number.isRequired,
      user: React.PropTypes.string.isRequired
    }
  }

  render() {
    return (
      <li>
        <h3 className="num">{this.props.rank}</h3>
        <p className="score">{this.props.score}</p>
        <p className="score-user">{this.props.user}</p>
      </li>
    )
  }
}
