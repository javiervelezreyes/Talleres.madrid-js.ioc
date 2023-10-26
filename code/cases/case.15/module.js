export function Async (fn) {
  return function (...args) {
    return new Promise (function (ok) {
      setTimeout (function () {
        let value = fn (...args)
        ok (value)
      }, 100)
    })
  }
}

export function Execute (Gn) {
	let gn = Gn ()
	function tick ({ value, done }) {
		if (done) return value
		else {
      let p = value
      p.then (function (x) {
			 tick (gn.next (x))
		  })
    }
	}
	tick (gn.next ())
}