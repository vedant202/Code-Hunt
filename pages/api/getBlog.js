// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const main = require('./connectionMongoDb').main
const blogSchema = require('./blogPostSchema').blogSchema
const mongoose = require('mongoose')


export default function handler(req, res) {
  main().then(
    async ()=>{

      let slug = req.query.slug
      console.log(slug)
      let b
      try{
        b = mongoose.model("blogs")
      }catch(error){
        b = mongoose.model("blogs",blogSchema)

      }
      const blog = await b.find( { Title: slug } ).exec()
      // let jblog = JSON.parse()
      console.log(blog)
      
      res.status(200).json(blog)
      
    }
  ).catch((err)=>{
    console.log(err)
  })
  
}
