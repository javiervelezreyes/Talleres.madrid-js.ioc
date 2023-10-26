import IoC    from './config.js'
import Worker from '../model/worker.js'

function Factory () {

  function get () {
    return function (key) {
      let Task   = IoC.get ('Task')
      let worker = new Worker (Task, key)
      return worker
    }
  }

  return { get }
}

export default Factory ()

