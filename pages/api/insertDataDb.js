const main = require('./connectionMongoDb')
const mongoose = require('mongoose')
const blogSchema = require('./blogPostSchema')
const readline = require('readline-sync')


function addData(title,author,para1,para2,para3,slug){
    main.main().then(
        async ()=>{
            const blogModel = mongoose.model('Blogs',blogSchema.blogSchema)

            const blogSchema = new mongoose.Schema({
                Title:String,
                Author:String,
                Date:Date,
                img:
                {
                    data: Buffer,
                    contentType: String,
                },
                para1:String,
                para2:String,
                para3:String,
                slug:String,
                metaDesc:String,
            })

            await addBlog.save(function(err){
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Data is inserted");
                    mongoose.connection.close()
                }
            })
        }
    )
    .catch(err=>{
        conole.log(err)
    })
}


title = readline.question("Enter Title : ");
author = readline.question("Enter the name of author : ");
para1 = readline.question("Enter para1 : ")
para2 = readline.question("Enter para2 : ")
para3 = readline.question("Enter para3 : ")
slug = readline.question("Enter slug : ")

addData(title,author,para1,para2,para3,slug)

