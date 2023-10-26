import Workers from '../model/workers.x.js'

function Factory () {

  let workers =  Workers ()

  function get () {
    return workers
  }

  return { get }
}

export default Factory ()