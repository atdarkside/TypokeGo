export function setLyrics(lyrics) {
  return {
    type: 'SET_LYRICS',
    lyrics
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
