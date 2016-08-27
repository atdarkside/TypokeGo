import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import App from './views/app.jsx'


const initialState = {
  lyrics: null,
  elapsedTime: 0,
  playingPart: -1
}

render(
  <Provider store={createStore(reducer, initialState)}>
    <App/>
  </Provider>,
  document.getElementsByTagName('main')[0]
)
