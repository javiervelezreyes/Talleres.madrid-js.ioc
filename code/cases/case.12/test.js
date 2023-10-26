import Async from './module.js'

let add = Async (function (x, y) { return x + y })
let sub = Async (function (x, y) { return x - y })
let mul = Async (function (x, y) { return x * y })
let div = Async (function (x, y) { return x / y })

add (3, 2) (console.log)
sub (3, 2) (console.log)
mul (3, 2) (console.log)
div (3, 2) (console.log)