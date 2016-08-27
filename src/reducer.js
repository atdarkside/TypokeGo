import dummyData from './static/dummy.json'
import {timerInterval, initialState} from './utils'


function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_LYRICS':
      const timestamps = dummyData
        .message
        .body
        .macro_calls['track.subtitles.get']
        .message
        .body
        .subtitle_list[0]
        .subtitle
        .subtitle_body

      return Object.assign({}, state, {
        lyrics: JSON.parse(timestamps)
      })
    case 'UPDATE_TIMER':
      const elapsedTime = state.elapsedTime + timerInterval
      return Object.assign({}, state, {
        playingPart: state.playingPart + Number(state.lyrics[state.playingPart + 1].time.total <= state.elapsedTime),
        elapsedTime
      })
    case 'RESET':
      return initialState
    case 'TYPE':
      const playingLine = state.lyrics[state.playingPart].text

      if (playingLine.length <= state.validTypeCount) {
        return state
      }

      if (playingLine[state.validTypeCount] === action.key) {
        return Object.assign({}, state, {
          validTypeCount: state.validTypeCount + 1,
          invalidTypeCount: 0
        })
      }

      return Object.assign({}, state, {
        invalidTypeCount: state.invalidTypeCount + 1
      })
    default:
      return state
  }
}

export default reducer
