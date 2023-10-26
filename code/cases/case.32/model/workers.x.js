class Workers {

  constructor () {
    this.workers = new Map ()
  }
  
  get (key) {
    return (
       key && this.workers.get  (key) ||
      !key && this.workers.values ()
    )
  } 

  set (worker) {
    if (worker) {
      let key   = worker.key
      let value = worker
      this.workers.set (key, value)
    } 
  } 

  remove (worker) {
    let key = worker && worker.key
     worker && this.workers.delete (key)
    !worker && this.workers.clear  ()
  }

}

export default Workers

