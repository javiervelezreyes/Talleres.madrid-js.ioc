function Vector (...xs) {
  function Map (xs) {
    return function (fn) {
      return xs.map (fn)
    }
  }
  
  function Reduce (xs) {
    return function (fn, base) {
      return xs.reduce (fn, base)
    }
  }
  
  function Filter (xs) {
    return function (fn) {
      return xs.filter (fn)
    }
  }

  return {
    map     : Map    (xs),
    reduce  : Reduce (xs),
    filter  : Filter (xs)
  }
}

export default Vector



