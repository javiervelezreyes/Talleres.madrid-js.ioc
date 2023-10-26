import IoC    from './config.js'
import Worker from '../model/worker.js'

function Factory () {

  function get () {
    let task   = IoC.get ('Task')
    let worker = Worker (task)
    return worker
  }

  return { get }
}

export default Factory ()

