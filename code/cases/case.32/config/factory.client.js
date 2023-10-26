import IoC    from './config.js'
import Client from '../client.js'

function Factory () {

  function get () {
    let workers = IoC.get ('Workers')
    let worker  = IoC.get ('Worker')
    let wshop   = IoC.get ('Workshop')

    return function () {
      return new Client (
        worker,
        workers,
        wshop,
      ).execute ()
    }
  }

  return { get }
}

export default Factory ()

