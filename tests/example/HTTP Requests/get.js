import http from 'k6/http'

// Scenario
export const options = {
  vus: 1,
  iterations: 1,
  duration: '5s'
}

// Actions
export default function () {
  http.get('http://test.k6.io')
}
