import _ from 'lodash'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'


export const container = connect(
  state => _.omit(state, 'elapsedTime'),
  dispatch => bindActionCreators(actions, dispatch)
)
export const timerInterval = 0.1
export const initialState = {
  lyrics: null,
  elapsedTime: 0,
  playingPart: -1,
  validTypeCount: 0,
  invalidTypeCount: 0,
  score: 0,
  isFinished: false
}
