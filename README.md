# Using the Bitcoin Computer in node.js

A basic example for using the [Bitcoin Computer](http://www.bitcoincomputer.io) in node.js. The smart contract is the following Javascript program:

````
class Counter {
  constructor() {
    this.n = 0
  }

  inc() {
    this.n += 1
  }
}
````

The script below creates a smart object of the Counter class, deployes it on the blockchain, and calls the ``inc()`` function. Both the smart contract and the script are in the file ``index.mjs``.

````
  // create smart object
  const counter = await computer.new(Counter, [])
  console.log(`  > Created counter with value ${counter.n}`)

  // call the increment function of the smart object
  await counter.inc()
  console.log(`  > Incremented counter to ${counter.n}`)
````

## Execute the smart contract

To execute the smart contract run
````
node --experimental-modules index.mjs
````

If it worked you should see a log
````
  > Created counter with value 0
  > Incremented counter to 1
````

## Video

You can find more information in the [docs](https://bitcoin-computer.gitbook.io/docs/). Also check out the corresponding [Youtube tutorial](https://www.youtube.com/watch?v=51ZFe_8mSPw).

<a href="http://www.youtube.com/watch?feature=player_embedded&v=51ZFe_8mSPw
" target="_blank"><img src="http://img.youtube.com/vi/51ZFe_8mSPw/0.jpg"
alt="IMAGE ALT TEXT HERE" width="300" border="10" /></a>
