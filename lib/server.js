const Express = require('express')

const router = module.exports = Express()

const fs = require('fs')
// static files
router.use((req,res,next)=>{
  let config = require('./config')
  
})

// dynamic *.page.js file
router.use('*.page.js',(req,res,next)=>{
  
})

router.use((req,res,next)=>{
  res.status(404).send('404')
})


