import Task   from './factory.task.js'
import Worker from '../model/worker.js'

function Factory () {

  function get () {
    let task   = Task.get ()
    let worker = Worker (task)
    return worker
  }

  return { get }
}

export default Factory ()

