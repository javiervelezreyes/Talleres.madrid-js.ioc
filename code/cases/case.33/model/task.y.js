let task = 'Y'

class Task {

  constructor (worker) {
    this.worker = worker
  }

  execute (vehicle) {
    let worker = this.worker
    console.log ({ task, worker, vehicle })
  }

}

export default Task