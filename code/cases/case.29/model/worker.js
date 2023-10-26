function Worker (Task) {
  return function (key) {
  
    function work (vehicle) {
      Task (key).execute (vehicle)
    }
    
    return {
      key,
      work  
    }

  }  
}

export default Worker