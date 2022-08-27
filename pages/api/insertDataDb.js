const main = require('./connectionMongoDb')
const mongoose = require('mongoose')
const {blogSchema} = require('./blogPostSchema')
const readline = require('readline-sync')


function AddData(blogData){
    console.log("in add data")
    main.main().then(
        async ()=>{
            let blogModel
            try{
                blogModel = mongoose.model("Blogs")
            }
            catch(err){
                blogModel = mongoose.model("Blogs",blogSchema)
            }
            blogModel.create(blogData,(err,item)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Data is added");
                }
            })

            
        }
    )
    .catch(err=>{
        console.log(err)
    })
}


module.exports = AddData

