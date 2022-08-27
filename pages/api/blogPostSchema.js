const mongoose = require('mongoose')

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
module.exports = {blogSchema}