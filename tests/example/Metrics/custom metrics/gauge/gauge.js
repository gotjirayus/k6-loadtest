import http from 'k6/http'
import { Gauge } from 'k6/metrics'

const exampleGauge = new Gauge('example_gauge')

// Scenario
export const options = {
  vus: 1,
  iterations: 1,
  duration: '5s'
}

// Actions
export default function () {
  const res = http.get('http://test.k6.io')
  exampleGauge.add(res.body.length)
}
