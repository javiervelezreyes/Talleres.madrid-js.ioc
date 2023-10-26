import fx from './module.x.js'
import fy from './module.y.js'

let xs = [1, 2, 3]
let zs = []
for (let x of xs) {
  let y = fx (x)
  let z = fy (y)
  zs = [...zs, z]
}

console.log (zs)
