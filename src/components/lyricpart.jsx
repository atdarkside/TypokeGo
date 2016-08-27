import React from 'react'


export default class LyricPart extends React.Component {
  static get propTypes() {
    return {
      isPlaying: React.PropTypes.bool.isRequired,
      lyric: React.PropTypes.string.isRequired
    }
  }

  render() {
    return (
      <p className={this.props.isPlaying ? 'playing' : ''}>
        {this.props.lyric.split('').map((char, i) => <span key={i}>{char}</span>)}
      </p>
    )
  }
}
