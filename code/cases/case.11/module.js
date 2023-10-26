export function Map (fn) {
  return function (xs) {
    return xs.map (fn)
  }
}

export function Reduce (fn) {
  return function (xs) {
    return xs.reduce (fn, 0)
  }
}

export function Filter (fn) {
  return function (xs) {
    return xs.filter (fn)
  }
}

