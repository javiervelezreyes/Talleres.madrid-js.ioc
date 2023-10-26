import Workers from './config/workers.js'
import Worker  from './model/worker.js'
import WShop   from './model/wshop.js'

const X = 'X'
const Y = 'Y'
const Z = 'Z'

let workers = Workers.get ()

workers.set (Worker (X))
workers.set (Worker (Y))
workers.set (Worker (Z))

WShop (workers).execute (
  'Car 01',
  'Car 02',
  'Car 03',
)
