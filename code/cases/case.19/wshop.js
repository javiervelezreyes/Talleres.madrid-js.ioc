class WShop {
  constructor () {}

  get Worker ()       { return this.worker   }
  set Worker (worker) { this.worker = worker }

  execute (...vehicles) {
    for (let vehicle of vehicles) {
      this.worker.work (vehicle)
    }
  }
}

export default function () {
  return new WShop ()
}
