import IoC     from './ioc.js'
import Client  from './factory.client.js'
import Worker  from './factory.worker.js'
import Workers from './factory.workers.js'
import WShop   from './factory.wshop.js'

export default IoC.Config ({
  'Client'   : Client, 
  'Worker'   : Worker, 
  'Workers'  : Workers, 
  'Workshop' : WShop, 
})
