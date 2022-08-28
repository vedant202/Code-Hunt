const main = require('../connectionMongoDb')
const mongoose = require('mongoose')
const {contactSchema} = require('./contactSchema')

function AddContactData(data){
    main.main().then(
        async ()=>{
            let contactModel ;
            try{
                contactModel = mongoose.model("contact_details",contactSchema);
            }
            catch{
                contactModel = mongoose.model("contact_details");
            }
            contactModel.create(data,(err,item)=>{
                if(err){
                    console.error(err)
                }
                else{
                    console.log("Data is added")
                }
            })
        }
    ).catch(err=>{
        console.error(err);
    })

}

module.exports = {AddContactData}
