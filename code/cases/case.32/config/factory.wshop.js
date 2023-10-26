import IoC   from './config.js'
import WShop from '../model/wshop.js'

function Factory () {

  function get () {
    let workers = IoC.get ('Workers')
    let wshop   = new WShop (workers)
    return wshop
  }

  return { get }
}

export default Factory ()

