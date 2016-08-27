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

export function resetTimer() {
  return {
    type: 'RESET_TIMER'
  }
}
