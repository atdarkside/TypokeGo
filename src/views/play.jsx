import _ from 'lodash'
import React from 'react'
import {container, timerInterval} from '../utils'
import LyricPart from '../components/lyricpart'


class Play extends React.Component {
  componentWillMount() {
    const trackId = 0
    this.props.actions.fetchLyrics(trackId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lyrics !== nextProps.lyrics) {
      this.startTimer()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.props.actions.resetTimer()
  }

  render() {  // TODO: 歌詞の取得に失敗した時の表示
    if (this.props.lyrics) {
      const lyrics = this.props.lyrics.map(_.property('text'))
      return (
        <section>
          {lyrics.map((lyric, i) => <LyricPart key={i} lyric={lyric} isPlaying={this.props.playingPart === i}/>)}
        </section>
      )
    } else {
      return null
    }
  }

  startTimer() {
    this.timer = setInterval(this.props.actions.updateTimer.bind(this), timerInterval * 1000)
  }
}


export default container(Play)
