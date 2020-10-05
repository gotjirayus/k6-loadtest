import http from 'k6/http'
import { Rate } from 'k6/metrics'

const exampleRate = new Rate('example_rate')

// Scenario
export const options = {
  vus: 1,
  iterations: 1,
  duration: '5s'
}

// Actions
export default function () {
  const res = http.get('http://test.k6.io')
  exampleRate.add(res.status > 400)
}
