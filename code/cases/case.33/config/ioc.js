function IoC () {
  function Config (config) {
    function get (ref) {
      let key = ref.name || ref
      return config[key]
    }
    return { get }
  }
  return { Config }
}

export default IoC ()

