import Task from '../model/task.x.js'

function Factory () {

  function get () {
    return Task
  }

  return { get }
}

export default Factory ()

