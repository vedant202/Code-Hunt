const mongoose = require('mongoose')
const date = new Date();

const contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    desc:String,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = {contactSchema}