function Client (Worker, Workers, WShop) {

  const X = 'X'
  const Y = 'Y'
  const Z = 'Z'
  
  let workers = Workers .get ()
  let wshop   = WShop   .get ()
  let worker  = Worker  .get ()
  
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
