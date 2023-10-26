class WShop {

  constructor (Workers) {
    this.Workers = Workers
  }

  execute (...vehicles) {
    for (let vehicle of vehicles) {
      for (let worker of this.Workers.get ()) {
        worker.work (vehicle)
      }
    }
  }

}

export default WShop

