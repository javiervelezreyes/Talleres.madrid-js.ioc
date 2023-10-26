import Workers from './workers.js' 

class WShop {
  constructor () {}

  execute (...vehicles) {
    for (let vehicle of vehicles) {
      for (let worker of Workers (this).get ()) {
        worker.work (vehicle)
      }
    }
  }
}

export default function () {
  return new WShop ()
}
