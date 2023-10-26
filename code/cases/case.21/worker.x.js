let worker = 'X'

function Worker () {
  return {
    work (vehicle) {
      console.log ({ worker, vehicle })
    }
  }
}

export default Worker ()