import Inject   from './config/inject.js'
import Worker   from './config/factory.worker.js'
import Workers  from './config/factory.workers.js'
import Workshop from './config/factory.wshop.js'

const X = 'X'
const Y = 'Y'
const Z = 'Z'

// @Inject (
//   Worker,
//   Workers,
//   Workshop
// )
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

export default Inject (
  Worker,
  Workers,
  Workshop
) (Client)



