function Workers () {

  let workers = {}
  
  function get (key) {
    return (
       key && workers[key] ||
      !key && Object.values (workers)
    )
  } 

  function set (worker) {
    if (worker) {
      let key   = worker.key
      let value = worker
      workers[key] = value
    } 
  } 

  function remove (worker) {
    let key = worker && worker.key
     worker && delete workers[key]
    !worker && (workers = {})
  }

  return { 
    get,
    set,
    remove
  }
}

export default Workers

