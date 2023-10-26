import Workers from './config/workers.js'
import WShop   from './config/wshop.js'
import Worker  from './model/worker.js'

const X = 'X'
const Y = 'Y'
const Z = 'Z'

let workers = Workers .get ()
let wshop   = WShop   .get ()

workers.set (Worker (X))
workers.set (Worker (Y))
workers.set (Worker (Z))

wshop.execute (
  'Car 01',
  'Car 02',
  'Car 03',
)
