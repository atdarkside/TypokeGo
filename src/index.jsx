import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Router, browserHistory} from 'react-router'
import reducer from './reducer'
import {initialState} from './utils'
import './static/style.css'
import Top from './views/top'
import Play from './views/play'


const routing = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/play/:trackId',
    component: Play
  }
]

render(
  <Provider store={createStore(reducer, initialState)}>
    <Router history={browserHistory} routes={routing}/>
  </Provider>,
  document.getElementsByTagName('main')[0]
)
