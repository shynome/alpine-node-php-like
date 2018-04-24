
/**
 * @typedef {string} Ctx
 */

/**
 * 设置页面数据
 * @template T
 * @param { (ctx:Ctx)=>T } f 
 */
exports.data = f => f

/**
 * 渲染页面数据
 * @template T
 * @param { (ctx:Ctx,data?:T)=>string } f 
 */
exports.render = f => f

exports.startServer = require('./start').startServer

