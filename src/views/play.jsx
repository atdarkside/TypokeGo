import _ from 'lodash'
import React from 'react'
import {browserHistory} from 'react-router'
import YouTube from 'react-youtube'
import {container, timerInterval} from '../utils'
import LyricPart from '../components/lyricpart'


class Play extends React.Component {
  constructor() {
    super()
    this.state = {
      videoId: null,
      delay: 0
    }
  }

  componentWillMount() {
    this.props.setTrack(this.props.params.trackId)

    fetch(`http://localhost:3333/api/music/search/id/${this.props.params.trackId}`, {mode: 'cors'})
      .then(_.method('json'))
      .then(songs => this.setState({
        videoId: songs[0].youtube_url.replace('https://youtu.be/', ''),
        delay: songs[0].deray
      }))
  }

  componentDidMount() {
    addEventListener('keypress', this.onKeyPress.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lyrics !== nextProps.lyrics) {
      this.startTimer()
      console.log(nextProps.lyrics)
    }

    if (this.props.playingPart === null) {
      clearInterval(this.timer)
      // TODO: Wait for movie finish
      browserHistory.push(`/result/${this.props.params.trackId}/${this.props.judges.filter(_.identity).length * 1000}`)
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
          <YouTube videoId={this.state.videoId} opts={{playerVars: {autoplay: 1, start: this.state.delay}}}/>
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
