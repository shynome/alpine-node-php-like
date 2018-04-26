/// <reference path="./config.type.d.ts" />

let config = require('./config')

/**
 * @param {string} config_filepath 
 */
async function startServer(config_filepath){

  if(config.running){
    console.warn(`server running @ ${config.ip_addr}:${config.port}`)
    return
  }

  config = Object.assign(require('./config'),require(config_filepath))

  await new Promise((rl,rj)=>{

    require('http').createServer(require('./server').router)
    .once('error',rj)
    .listen(config.port,config.ip_addr,rl)

  })

  config.running = true
  console.log(`server running @ ${config.ip_addr}:${config.port}`)

  return config
}

/**
 * @param {string} config_filepath 
 */
exports.startServer = (config_filepath=require('path').join(process.cwd(),'server.config.js'))=>{
  
  return startServer(config_filepath).catch(err=>{

    console.log(err && err.stack || err)
    process.exit(1)

  })

}

