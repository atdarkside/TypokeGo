import _ from 'lodash'
import {timerInterval, initialState} from './utils'


function reducer(state, action) {
  switch (action.type) {
      case 'SET_TRACK':
      console.log(action.trackId)
      const lyrics = require(`./static/json/${action.trackId}.json`)
      return Object.assign({}, state, {lyrics})
    case 'UPDATE_TIMER':
      const elapsedTime = state.elapsedTime + timerInterval
      const nextPart = state.playingPart + 1
      const nextLine = state.lyrics[nextPart]
      if (nextLine.time.total <= state.elapsedTime) {
        if (state.lyrics.length - 1 <= nextPart) {  // if game finished
          return Object.assign({}, state, {
            playingPart: null
          })
        }

        const hasSucceed = state.playingPart === state.judges.length - 1
        return Object.assign({}, state, {  // next line
          playingPart: nextPart,
          elapsedTime,
          validTypeCount: 0,
          invalidTypeCount: 0,
          judges: state.judges.concat(hasSucceed ? [] : [false])
        })
      }

      return Object.assign({}, state, {elapsedTime})  // elapsedTime++
    case 'RESET':
      return initialState
    case 'TYPE':
      if (!state.lyrics[state.playingPart]) {  // まだ始まってなかったら
        return state
      }

      const playingLine = state.lyrics[state.playingPart].text

      if (playingLine.length <= state.validTypeCount) {  // 全部打ってたら
        return state
      }

      if (playingLine[state.validTypeCount] === action.key) {  // 正しいキー
        const validTypeCount = state.validTypeCount + 1

        return Object.assign({}, state, {
          invalidTypeCount: 0,
          judges: state.judges.concat(validTypeCount === playingLine.length ? [true] : []),
          validTypeCount
        })
      }

      return Object.assign({}, state, {  // 間違ったキー
        invalidTypeCount: state.invalidTypeCount + 1
      })
    default:
      return state
  }
}

export default reducer
