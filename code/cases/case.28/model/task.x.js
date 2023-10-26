let task = 'X'

function Task (worker) {

  function execute (vehicle) {
    console.log ({ task, worker, vehicle })
  }

  return { execute }
}

export default Task