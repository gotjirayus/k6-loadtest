import http from 'k6/http'

// Scenario
export const options = {
  vus: 1,
  iterations: 1,
  duration: '5s'
}

// Actions
export default function () {
  const headers = {
    'Content-Type': 'application/json'
  }
  const query = `
        query{
            rockets {
            id
            name
            type
            company
            country
            boosters
            }
        }`
  http.post('https://api.spacex.land/graphql', JSON.stringify({ query: query }), { headers: headers })
}
