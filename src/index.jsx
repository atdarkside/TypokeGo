import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'


export default class UnderDevelopment extends React.Component {
  render() {
    return (
      <div>ATAMA OKASHI NARUDE</div>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={UnderDevelopment}/>
  </Router>,
  document.getElementsByTagName('main')[0]
)
