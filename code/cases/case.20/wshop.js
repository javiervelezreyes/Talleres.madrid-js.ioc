class WShop {
  constructor () {
    this.workers = []
  }

  Worker (worker)  { 
    this.workers.push (worker)       
  }

  Workers (...workers) { 
    this.workers.push (...workers)
  }

  execute (...vehicles) {
    for (let vehicle of vehicles) {
      for (let worker of this.workers) {
        worker.work (vehicle)
      }
    }
  }
}

export default function () {
  return new WShop ()
}
