import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {container} from '../utils'
import Top from './top'
import Play from './play'


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/play/:trackId' component={Play}/>
        <Route path='/' component={Top}/>
      </Router>
    )
  }
}


export default container(App)
