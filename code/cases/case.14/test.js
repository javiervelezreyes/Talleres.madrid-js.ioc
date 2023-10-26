import { Defer   } from './module.js'
import { Execute } from './module.js'

let add = Defer (function (x, y) { return x + y })
let sub = Defer (function (x, y) { return x - y })
let mul = Defer (function (x, y) { return x * y })

Execute (function * () {
  let x = yield add (3, 2)
  let y = yield mul (x, 4)
  let z = yield sub (y, 5)
  console.log (z)
})
