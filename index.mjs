import Computer from 'bitcoin-computer'
const computer = new Computer({ seed: 'replace this seed'})

class Counter {
  constructor() {
    this.n = 0
  }

  inc() {
    this.n += 2
  }
}

;(async () => {
  const counter = await computer.new(Counter)
  await counter.inc()
  console.log(counter.n)
  computer.shutdown()
})()
