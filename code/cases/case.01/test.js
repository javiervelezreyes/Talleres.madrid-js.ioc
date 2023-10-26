function fx (x) {
  return x * x
}

function fy (y) {
  return fx (y) + 1
}

(function Log () {
  console.log (fy (5))
})()

