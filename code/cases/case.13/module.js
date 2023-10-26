function Async (fn) {
  return function (...args) {
    return new Promise (function (ok) {
      setTimeout (function () {
        let out = fn (...args)
        ok (out)
      }, 0)
    })
  }
}

export default Async