import IoC    from './config/config.js'
import Client from './client.js'

let Workers = IoC.get ('Workers')
let Worker  = IoC.get ('Worker')
let WShop   = IoC.get ('Workshop')

Client (
  Worker,
  Workers,
  WShop,
)
