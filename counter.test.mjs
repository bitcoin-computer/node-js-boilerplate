import { Computer } from 'bitcoin-computer'
import { Counter } from './counter.mjs'

test('Should import the Bitcoin Computer', () => {
  expect(Computer).toBeDefined();
})

test('Should create a counter', async () => {
  const counter = await computer.new(Counter, [])
  expect(counter).toBeDefined()
})
