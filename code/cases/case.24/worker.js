function Worker (key) {

  function work (vehicle) {
    console.log ({ key, vehicle })
  }
  
  return {
    key,
    work  
  }
}

export default Worker