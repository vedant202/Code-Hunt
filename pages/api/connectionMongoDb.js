const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/code_hunt');
}

main().then(
    async()=>{
        const blogSchema = new mongoose.Schema({
            Title:String,
            Author:String,
            Date:Date,
            img:
            {
                data: Buffer,
                contentType: String
            },
            para1:String,
            para2:String,
            para3:String,
        })
        
        const blogModel = mongoose.model('Blogs',blogSchema)
        
        const addBlog = new blogModel({Title:"How to learn Java",
                                   Author:"Vedant Dhenge",
                                   Date:new Date,
                                   img:null,
                                   para1:"Python is a oop language",
                                   para2:"",
                                   para3:""
                                })
        await addBlog.save(function (err){
            if(err){
                return err;
            }
            else{
                console.log("Data is inserted");
                mongoose.connection.close();ssee3nbnM999999o
            }
        });
        
    }
).
catch(err=>{
    conole.log(err)
})


// mongoose.co
// export default main;


// const 