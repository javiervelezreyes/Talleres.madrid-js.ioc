import Worker from './worker.x.js'

function WShop () {
  return {
    execute (...vehicles) {
      for (let vehicle of vehicles) {
        Worker.work (vehicle)
      }
    }
  }
}

WShop ().execute (
  'Car 01',
  'Car 02',
  'Car 03',
)
