import Workers from './workers.x.js' 

function WShop () {

  function execute (...vehicles) {
    for (let vehicle of vehicles) {
      for (let worker of Workers.get ()) {
        worker.work (vehicle)
      }
    }
  }

  return { execute }
}

export default WShop ()

