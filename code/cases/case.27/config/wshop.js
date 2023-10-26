import Workers from './workers.js'
import WShop   from '../model/wshop.js'

function Factory () {

  function get () {
    let workers = Workers.get ()
    let wshop   = WShop (workers)
    return wshop
  }

  return { get }
}

export default Factory ()

