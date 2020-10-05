import http from 'k6/http'
import { sleep } from 'k6'

// Scenario
export const options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1400 },
    { duration: '3m', target: 1400 },
    { duration: '10s', target: 100 },
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 }
  ]
}
// Actions
export default function () {
  http.get('http://test.k6.io')
  sleep(1)
}
