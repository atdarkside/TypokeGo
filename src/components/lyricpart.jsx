import React from 'react'
import {container} from '../utils'


class LyricPart extends React.Component {
  static get propTypes() {
    return {
      isPlaying: React.PropTypes.bool.isRequired,
      lyric: React.PropTypes.string.isRequired
    }
  }

  render() {
    const decideClass = i => {
      if (!this.props.isPlaying) {
        return ''
      }
      if (i >= this.props.validTypeCount && i < this.props.validTypeCount + this.props.invalidTypeCount) {
        return 'invalid'
      }
      if (i < this.props.validTypeCount) {
        return 'valid'
      }
    }

    return (
      <p className={this.props.isPlaying ? 'playing' : ''}>
        {this.props.lyric.split('').map((char, i) => <span key={i} className={decideClass(i)}>{char}</span>)}
      </p>
    )
  }
}

export default container(LyricPart)
