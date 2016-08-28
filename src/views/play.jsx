import _ from 'lodash'
import React from 'react'
import {browserHistory} from 'react-router'
import {container, timerInterval} from '../utils'
import LyricPart from '../components/lyricpart'


class Play extends React.Component {
  componentWillMount() {
    fetch(`http://localhost:3333/api/music/json/load/${this.props.params.trackId}`, {mode: 'cors'})
      .then(_.method('json'))
      .then(this.props.setLyrics)
  }

  componentDidMount() {
    addEventListener('keypress', this.onKeyPress.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lyrics !== nextProps.lyrics) {
      this.startTimer()
    }

    if (this.props.playingPart === null) {
      clearInterval(this.timer)
      // TODO: Wait for movie finish
      browserHistory.push(`/result`)
    }
  }

  componentWillUnmount() {
    removeEventListener('keypress', this.onKeyPress.bind(this))
    clearInterval(this.timer)
    this.props.reset()
  }

  render() {  // TODO: 歌詞の取得に失敗した時の表示
    if (this.props.lyrics) {
      const lyrics = this.props.lyrics.map(_.property('text'))
      return (
        <section className="play">
          {lyrics.map((lyric, i) => <LyricPart key={i}
                                               lyric={lyric}
                                               isPlaying={this.props.playingPart === i}
                                               hasSucceed={this.props.judges[i]}/>)}
        </section>
      )
    } else {
      return null
    }
  }

  startTimer() {
    this.timer = setInterval(this.props.updateTimer.bind(this), timerInterval * 1000)
  }

  onKeyPress(event) {
    event.preventDefault()
    this.props.type(event.key)
  }
}


export default container(Play)
