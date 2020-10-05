import http from 'k6/http'
import { sleep } from 'k6'

// Scenario
export const options = {
  stages: [
    { duration: '5m', target: 100 },
    { duration: '10m', target: 100 },
    { duration: '5m', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'] // Expectation Value
  }
}

// Actions
export default function () {
  http.get('http://test.k6.io')
  sleep(1)
}
