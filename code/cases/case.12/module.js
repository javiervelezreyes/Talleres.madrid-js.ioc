function Async (fn) {
  return function (...args) {
    return function (gn) {
      setTimeout (function () {
        let out = fn (...args)
        gn (out)
      }, 0)
    }
  }
}

export default Async