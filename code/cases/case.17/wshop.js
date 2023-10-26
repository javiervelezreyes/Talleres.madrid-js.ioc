class WShop {
  constructor (worker) {
    this.worker = worker
  }

  execute (...vehicles) {
    for (let vehicle of vehicles) {
      this.worker.work (vehicle)
    }
  }
}

export default function (Worker) {
  return new WShop (Worker)
}
