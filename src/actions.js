export function setTrack(trackId) {
  return {
    type: 'SET_TRACK',
    trackId
  }
}

export function updateTimer() {
  return {
    type: 'UPDATE_TIMER'
  }
}

export function reset() {
  return {
    type: 'RESET'
  }
}

export function type(key) {
  return {
    type: 'TYPE',
    key
  }
}
