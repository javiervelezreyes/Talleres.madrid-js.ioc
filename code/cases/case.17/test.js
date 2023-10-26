import WShop from './wshop.js'
import WX    from './worker.x.js'
import WY    from './worker.y.js'

WShop (WX).execute (
  'Car 01',
  'Car 02',
  'Car 03',
)

WShop (WY).execute (
  'Car 04',
  'Car 05',
  'Car 06',
)
