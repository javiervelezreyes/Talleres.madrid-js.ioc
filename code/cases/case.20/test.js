import WShop from './wshop.js'
import WX    from './worker.x.js'
import WY    from './worker.y.js'

let XWShop  = WShop ()
let YWShop  = WShop ()
let XYWShop = WShop ()

XWShop  .Worker  (WX)
YWShop  .Worker  (WY)
XYWShop .Workers (WX, WY)

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

XYWShop.execute (
  'Car 07',
  'Car 08',
  'Car 09',
)