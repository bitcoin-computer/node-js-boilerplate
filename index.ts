import { Computer } from 'bitcoin-computer'
import Counter from './counter'

const computer = new Computer({ seed: 'replace this seed', network: 'testnet' })

;(async () => {
  const counter = await computer.new(Counter, [])
  console.log(`  > Created counter with value ${counter.n}`)
  await counter.inc()
  console.log(`  > Incremented counter to ${counter.n}`)
})()
