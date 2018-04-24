
const Express = require('express')

/**
 * @typedef {Object} context
 * @prop {Express.Request} req
 * @prop {Express.Response} res
 */
exports.ctx = /**@type {context}*/({ req:null, res:null })

exports.startServer = require('./start').startServer

