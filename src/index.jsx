import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import Top from './views/top'
import Play from './views/play'


console.log((new Play()).render())
render(
  <Router history={browserHistory}>
    <Route path='/play/:trackId' component={Play}/>
    <Route path='/' component={Top}/>
  </Router>,
  document.getElementsByTagName('main')[0]
)
