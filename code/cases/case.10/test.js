import Vector from './module.js'

const xs = Vector (1, 2, 3, 4, 5)

console.log (
  xs.map (function (x) {
    return x * x
  })
)

console.log (
  xs.reduce (function (x, y) {
    return x + y
  }, 0)
)

console.log (
  xs.filter (function (x) {
    return x > 3
  })
)
