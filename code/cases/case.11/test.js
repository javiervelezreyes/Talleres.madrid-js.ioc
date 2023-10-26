import { Map    } from './module.js'
import { Reduce } from './module.js'
import { Filter } from './module.js'

function Square (x)  { return x * x }
function Add (x, y)  { return x + y }
function Greater (x) { return x > 3 }

let square  = Map    (Square)
let add     = Reduce (Add)
let greater = Filter (Greater)

console.log (
  square ([1, 2]),
  square ([1, 2, 3]),
  square ([1, 2, 3, 4, 5])
)

console.log (
  add ([1, 2]),
  add ([1, 2, 3]),
  add ([1, 2, 3, 4, 5])
)

console.log (
  greater ([1, 2]),
  greater ([1, 2, 3]),
  greater ([1, 2, 3, 4, 5])
)




