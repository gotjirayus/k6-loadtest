import http from 'k6/http'
import { check } from 'k6'

// Scenario
export const options = {
  vus: 1,
  iterations: 1,
  duration: '5s'
}

// Actions
export default function () {
  const res = http.get('http://test.k6.io')
  check(res, {
    'is status 200': (r) => r.status === 200
  })
}
