import { Map    } from './module.js'
import { Reduce } from './module.js'
import { Filter } from './module.js'

const xs = [1, 2, 3, 4, 5]

console.log (
  Map (xs, function (x) {
    return x * x
  })
)

console.log (
  Reduce (xs, function (x, y) {
    return x + y
  }, 0)
)

console.log (
  Filter (xs, function (x) {
    return x > 3
  })
)
