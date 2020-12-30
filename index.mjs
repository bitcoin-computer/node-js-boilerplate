import { Computer } from 'bitcoin-computer'
const computer = new Computer({ seed: 'replace this seed', network: 'testnet' })

class Counter {
  constructor() {
    this.n = 0
  }

  inc() {
    this.n += 1
  }
}

;(async () => {
  const counter = await computer.new(Counter, [])
  console.log(`  > Created counter with value ${counter.n}`)
  await counter.inc()
  console.log(`  > Incremented counter to ${counter.n}`)
})()
