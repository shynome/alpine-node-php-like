
const Express = require('express')

const router = exports.router = Express()

const fse = require('fs-extra')
const path = require('path')
const { static_dirs, base_dir, index_extnames } = require('./config')

// normalize pathname
router.use((req,res,next)=>{

  if( /\/$/.test(req.path) ){
    // @ts-ignore
    req._parsedUrl.pathname = req.path + 'index.page.js'
  }
  res.locals.filepath = path.join(base_dir,req.path)
  next()
  
})

// static files
router.use(async (req,res,next)=>{
  
  if(! static_dirs.includes(req.path.split('/')[1]) ){
    return next()
  }

  if( ! await fse.pathExists(res.locals.filepath) ){
    return next()
  }

  res.sendfile(res.locals.filepath)

})

const dynamicRequire = require('@shynome/dynamic-require').bind(require)
// dynamic *.page.js file
router.use('*.page.js',async(req,res,next)=>{

  if( ! await fse.pathExists(res.locals.filepath) ){
    return next()
  }

  let html = await dynamicRequire(res.locals.filepath).render({req,res})

  res.send( typeof html === 'string' ? html : JSON.stringify(html) )
  
})

router.use((req,res,next)=>{
  res.status(404).send('404')
})
