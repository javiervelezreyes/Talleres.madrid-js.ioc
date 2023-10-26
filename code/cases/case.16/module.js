const { random } = Math

const COLOR    = 'color'
const WHEELS   = 'wheels'
const DOORS    = 'doors'
const ENERGY   = 'energy'
const Settings = {
  [COLOR]  : [1, 2, 3],
  [WHEELS] : [4, 5],
  [DOORS]  : [3, 5],
  [ENERGY] : [1, 2, 3],
}

function Factory () {

  function get (Settings, key) {
    let range = Settings[key]
    let max   = range.length
    let idx   = random (max) * max | 0
    return range[idx]
  }

  function Create (Gn) {
    let gn       = Gn ()
    let end      = false
    let response = gn.next ()
    while (!end) {
      let { value, done } = response
      if (value) {
        let key = value
        let cfg = get (Settings, key)
        response = gn.next ({ [key] : cfg })
      }
      end = done
    }
  }

  return {
   COLOR,
   WHEELS,
   DOORS,
   ENERGY,
   Create
  }

}

export default Factory ()