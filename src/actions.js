export function fetchLyrics(trackId) {
  return {
    type: 'FETCH_LYRICS',
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
