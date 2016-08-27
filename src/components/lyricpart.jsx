import React from 'react'
import {findDOMNode} from 'react-dom'
import {container} from '../utils'


class LyricPart extends React.Component {
  static get propTypes() {
    return {
      isPlaying: React.PropTypes.bool.isRequired,
      lyric: React.PropTypes.string.isRequired
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPlaying) {
      const verticallyCenter = window.innerHeight / 2
      const currentTop = findDOMNode(this).getBoundingClientRect().top
      window.scrollTo(0, document.body.scrollTop + currentTop - verticallyCenter)
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
