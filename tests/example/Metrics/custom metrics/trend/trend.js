import http from 'k6/http'
import { Trend } from 'k6/metrics'

const exampleTrend = new Trend('example_trend')

// Scenario
export const options = {
  vus: 1,
  iterations: 1,
  duration: '5s'
}

// Actions
export default function () {
  const res = http.get('http://test.k6.io')
  exampleTrend.add(res.timings.duration)
}
