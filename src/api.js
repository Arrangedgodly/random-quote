const baseUrl = 'https://api.quotable.io/'

const checkResponse = res => {
  if (!res.ok) {
    throw Error(`${res.status} ${res.statusText}`)
  }
  return res.json()
}

export function getRandomQuote() {
  return fetch(baseUrl + 'random')
    .then(checkResponse)
}