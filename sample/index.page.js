const jspages = require('@shynome/jspages')

exports.data = async (ctx=jspages.ctx)=>{
  return {
    name:'string'
  }
}

exports.render = async (ctx=jspages.ctx) =>{

  let data = await exports.data(ctx)
  
return `
${data.name}
`

}