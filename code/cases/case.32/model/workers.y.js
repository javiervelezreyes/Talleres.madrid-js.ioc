class Workers {

  constructor () {
    this.workers = {}
  }

  get (key) {
    return (
       key && this.workers[key] ||
      !key && Object.values (this.workers)
    )
  } 

  set (worker) {
    if (worker) {
      let key   = worker.key
      let value = worker
      this.workers[key] = value
    } 
  } 

  remove (worker) {
    let key = worker && worker.key
     worker && delete this.workers[key]
    !worker && (this.workers = {})
  }

}

export default Workers

