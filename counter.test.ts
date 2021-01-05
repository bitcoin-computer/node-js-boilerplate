import { Computer } from 'bitcoin-computer'

const computer = new Computer({ seed: 'replace this seed', network: 'testnet' })

class Counter {
  n: number

  constructor() {
    this.n = 0
  }

  inc() {
    this.n += 1
  }
}

describe('Counter', () => {  
  it('Should increment n', async () => {
    const counter = await computer.new(Counter, [])
    console.log(`  > Created counter with value ${counter.n}`)
  
    expect(counter.n).toBe(0)
  
    await counter.inc()
    console.log(`  > Incremented counter to ${counter.n}`)
    expect(counter.n).toBe(1)
  }, 20000)
})