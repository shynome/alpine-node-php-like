
const jspages = require('jspages')

exports.data = jspages.data(ctx=>{
  return {
    name: 'hello'
  }
})

exports.render = jspages.render(async ( ctx, data=exports.data(ctx) ) =>
`
${data.name}
`)