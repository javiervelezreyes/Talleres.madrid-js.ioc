function Workers () {

  let workers = new Map ()
  
  function get (key) {
    return (
       key && workers.get  (key) ||
      !key && workers.values ()
    )
  } 

  function set (worker) {
    if (worker) {
      let key   = worker.key
      let value = worker
      workers.set (key, value)
    } 
  } 

  function remove (worker) {
    let key = worker && worker.key
     worker && workers.delete (key)
    !worker && workers.clear  ()
  }

  return { 
    get,
    set,
    remove
  }
}

export default Workers ()

