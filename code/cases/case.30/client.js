function Client (worker, workers, wshop) {

  const X = 'X'
  const Y = 'Y'
  const Z = 'Z'
  
  workers.set (worker (X))
  workers.set (worker (Y))
  workers.set (worker (Z))
  
  wshop.execute (
    'Car 01',
    'Car 02',
    'Car 03',
  )

}

export default Client
