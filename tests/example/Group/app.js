import http from 'k6/http'
import { group } from 'k6'

// Scenario
export const options = {
  vus: 1,
  iterations: 1,
  duration: '5s'
}

// Actions
export default function () {
  group('indePage', () => {
    http.get('http://test.k6.io')
    // check and metrics
  })
}
