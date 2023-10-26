function IoC () {
  function Config (config) {
    function get (key) {
      let factory = config[key]
      let entity  = factory.get ()
      return entity
    }
    return { get }
  }
  return { Config }
}

export default IoC ()

