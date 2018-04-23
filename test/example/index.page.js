
const xphp = require('x-php')

exports.data = xphp.data(ctx=>{
  return {
    name: 'hello'
  }
})

exports.render = xphp.page(async ( ctx, data=exports.data(ctx) ) =>
`
${data.name}
`)