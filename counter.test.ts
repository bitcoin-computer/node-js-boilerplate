import { Computer } from 'bitcoin-computer'
import Counter from './counter'

const computer = new Computer({ seed: 'replace this seed', network: 'testnet' })

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
