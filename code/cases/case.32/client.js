const X = 'X'
const Y = 'Y'
const Z = 'Z'

class Client {

  constructor (worker, workers, wshop) {
    this.workers = workers
    this.worker  = worker
    this.wshop   = wshop
  }

  execute () {
    this.workers.set (this.worker (X))
    this.workers.set (this.worker (Y))
    this.workers.set (this.worker (Z))
    
    this.wshop.execute (
      'Car 01',
      'Car 02',
      'Car 03',
    )
  }
  
}

export default Client
