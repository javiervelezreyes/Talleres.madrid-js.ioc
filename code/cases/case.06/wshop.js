function WShop (worker) {
  return {
    execute (...vehicles) {
      for (let vehicle of vehicles) {
        worker.work (vehicle)
      }
    }
  }
}

export default WShop
