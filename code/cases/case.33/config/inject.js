import IoC from './config.js'

function Inject (...args) {
  return function (Cls) {
    let Factory = IoC.get (Cls)
    let factory = Factory (...args)
    let entity  = factory.get (Cls)
    return entity
  }
}

export default Inject



