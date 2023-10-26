class WShop {
  constructor () {}

  execute (...vehicles) {
    for (let vehicle of vehicles) {
      this.worker.work (vehicle)
    }
  }
}

export default function () {
  return new WShop ()
}
