import { Map    } from './module.js'
import { Reduce } from './module.js'
import { Filter } from './module.js'

const xs = [1, 2, 3, 4, 5]

let map    = Map    (xs)
let reduce = Reduce (xs)
let filter = Filter (xs)

console.log (
  map (function (x) {
    return x * x
  })
)

console.log (
  reduce (function (x, y) {
    return x + y
  }, 0)
)

console.log (
  filter (function (x) {
    return x > 3
  })
)
