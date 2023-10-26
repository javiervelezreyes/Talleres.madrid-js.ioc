export function Defer (fn) {
  return function (...args) {
    return function () {
      return fn (...args)
    }
  }
}

export function Execute (Gn) {
	let gn  = Gn ()
  let idx = 0
	function tick ({ value, done }) {
		if (done) return value
		else {
      let fn  = value
      let out = fn ()
      console.log (`[${idx++}] - ${out}`)
      tick (gn.next (out))
    }
	}
	tick (gn.next ())
}