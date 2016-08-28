import _ from 'lodash'
import React from 'react'
import {container} from '../utils'


class Top extends React.Component {
  constructor() {
    super()
    this.state = {
      songs: []
    }
  }

  render() {
    return (
      <section className="start-view">
        <div className="title-box">
          <h1>Typoké<span className="padd"></span>Go</h1>
          <p>Type your beats.</p>
          <span className="input-wra">
            <input placeholder="musicname" onKeyUp={this.handleKey.bind(this)}></input>
            {this.state.songs.map((song, i) => <span key={i} className="candidate">{song.title}</span>)}
            <i className="ion-search"></i>
          </span>
        </div>
        <div className="action-link">
          <div><i className="ion-log-in"></i></div>
          <div><i className="ion-person-stalker"></i></div>
          <div><i className="ion-person"></i></div>
        </div>
      </section>
    )
  }

  handleKey(event) {
    if (event.target.value === '') {
      return
    }

    fetch(`http://localhost:3333/api/music/search/keyword/${event.target.value}`, {mode: 'cors'})
      .then(_.method('json'))
      .then(songs => this.setState({songs}))
  }
}

export default container(Top)
