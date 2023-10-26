function Factory (Worker, Workers, WShop) {

  function get (Cls) {
    return function () {
      let worker  = Worker  .get ()
      let workers = Workers .get ()
      let wshop   = WShop   .get ()
      new Cls (
        worker, 
        workers, 
        wshop
      ).execute ()
    }
  }

  return { get }
}

export default Factory

