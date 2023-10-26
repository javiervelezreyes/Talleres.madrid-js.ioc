import Workers from './workers.x.js'
import Worker  from './worker.js'
import WShop   from './wshop.js'

const X = 'X'
const Y = 'Y'
const Z = 'Z'

Workers.set (Worker (X))
Workers.set (Worker (Y))
Workers.set (Worker (Z))

WShop.execute (
  'Car 01',
  'Car 02',
  'Car 03',
)
