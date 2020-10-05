import http from 'k6/http'
import { Counter } from 'k6/metrics'

const exampleCouter = new Counter('example_counter')

// Scenario
export const options = {
  vus: 1,
  iterations: 1,
  duration: '5s'
}

// Actions
export default function () {
  const res = http.get('http://test.k6.io')
  if (res.status === 200) {
    exampleCouter.add(1)
  }
}
