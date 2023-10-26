import Factory from './module.js'

let cars = []

function *Car () {
  cars.push ({
    ...yield Factory.COLOR,
    ...yield Factory.WHEELS,
    ...yield Factory.DOORS,
    ...yield Factory.ENERGY
  })
}

Factory.Create (Car) 
Factory.Create (Car) 
Factory.Create (Car) 

console.log (cars)