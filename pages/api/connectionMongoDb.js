const mongoose = require('mongoose');
const blogSchema = require('./blogPostSchema')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/code_hunt');
}

module.exports.main = main




