import React from 'react'
import {container} from '../utils'


class LyricPart extends React.Component {
  static get propTypes() {
    return {
      isPlaying: React.PropTypes.bool.isRequired,
      lyric: React.PropTypes.string.isRequired,
      hasSucceed: React.PropTypes.bool
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

    console.log(this.props.judges)
    let cls = ''
    if (this.props.isPlaying) {
      cls = 'playing'
    } else if (this.props.hasSucceed) {
      cls = 'success'
    } else if (this.props.hasSucceed === false) {
      cls = 'missing'
    }

    return (
      <p className={cls}>
        {this.props.lyric.split('').map((char, i) => <span key={i} className={decideClass(i)}>{char}</span>)}
      </p>
    )
  }
}

export default container(LyricPart)
