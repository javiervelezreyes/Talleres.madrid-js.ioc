class Worker {

  constructor (Task, key) {
    this.task = new Task (key)
    this.key  = key
  }

  work (vehicle) {
    let task = this.task
    task.execute (vehicle)
  }

}

export default Worker
