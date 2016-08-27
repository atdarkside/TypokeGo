import React from 'react'
import {container} from '../utils'


class LyricPart extends React.Component {
  static get propTypes() {
    return {
      isPlaying: React.PropTypes.bool.isRequired,
      lyric: React.PropTypes.string.isRequired
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isPlaying === false && nextProps.isPlaying === true) {
      addEventListener('keypress', event => this.props.type(event.key))
    }
  }

  render() {
    const decideClass = i => {
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
