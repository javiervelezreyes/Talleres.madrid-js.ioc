import Workers from '../model/workers.x.js'

function Factory () {

  let workers = new Workers ()

  function get () {
    return workers
  }

  return { get }
}

export default Factory ()