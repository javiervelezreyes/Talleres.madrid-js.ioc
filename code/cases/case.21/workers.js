let Store = new Map ()

function Workers (WShop) {
  
  let store = Store.get (WShop) || []
  Store.set (WShop, store)

  return {
    Worker (worker)  { 
      worker && store.push (worker)     
    },
  
    Workers (...workers) { 
      workers && store.push (...workers)
    },

    get () { return store }
  }
}

export default Workers