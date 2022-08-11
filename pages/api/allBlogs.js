import handler from './getBlog'

const mongoose = require('mongoose')
const main = require('./connectionMongoDb').main
const blogSchema = require('./blogPostSchema').blogSchema

export default function handler1(req,res){
    main().then(
        async ()=>{
            let blogModel
            try{
                blogModel = mongoose.model("Blogs")
            }
            catch(err){
                blogModel = mongoose.model("Blogs",blogSchema)
            }
            
            let blog = await blogModel.find().exec()
            // console.log(blog)
            res.status(200).json(blog.map((d)=>{
                console.log(d.Title)
                return d.Title
            }))
        }
    )
    .catch((err)=>{
        console.log(err)
    });
}