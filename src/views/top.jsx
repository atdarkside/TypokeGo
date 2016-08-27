import React from 'react'
import {container} from '../utils'


class Top extends React.Component {
  componentDidMount(){

    fetch("http://localhost:3333/api/user/save",
        {method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
            twitter_id: "0410",
            twitter_screen_name: '_Ghostrick_',
            name: 'nagimaru',
            icon: 'Google.com'
          })
        }
      ).
      then((res) => {
        const json = res.json();
        console.log(json);
        return json;
      }).then(json => {
        console.log(json);
        return json;
    });
  }
  render() {
    console.log(this.props.lyrics)
    return (
      <section className="start-view">
        <div className="title-box">
          <h1>Typoké<span className="padd"></span>Go</h1>
          <p>Type your beats.</p>
          <span className="input-wra">
            <input></input>
            <span className="candidate">candidate 1</span>
            <span className="candidate">candidate 2</span>
            <span className="candidate">candidate 3</span>
            <i className="ion-search"></i>
          </span>
        </div>
      </section>
    )
  }
}

export default container(Top)
