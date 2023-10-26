import IoC    from './config.js'
import Client from '../client.js'

function Factory () {

  function get () {
    let Workers = IoC.get ('Workers')
    let Worker  = IoC.get ('Worker')
    let WShop   = IoC.get ('Workshop')

    return function () {
      return Client (
        Worker,
        Workers,
        WShop,
      )
    }
  }

  return { get }
}

export default Factory ()

