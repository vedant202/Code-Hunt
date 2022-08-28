const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    desc:String,
})

module.exports = {contactSchema}