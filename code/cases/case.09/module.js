export function Map (xs) {
  return function (fn) {
    return xs.map (fn)
  }
}

export function Reduce (xs) {
  return function (fn, base) {
    return xs.reduce (fn, base)
  }
}

export function Filter (xs) {
  return function (fn) {
    return xs.filter (fn)
  }
}

