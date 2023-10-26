import WShop from './wshop.js'
import WX    from './worker.x.js'
import WY    from './worker.y.js'

let XWShop = WShop ()
let YWShop = WShop ()

XWShop.worker = WX
YWShop.worker = WY

XWShop.execute (
  'Car 01',
  'Car 02',
  'Car 03',
)

YWShop.execute (
  'Car 04',
  'Car 05',
  'Car 06',
)
