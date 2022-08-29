const main = require('../connectionMongoDb')
const mongoose = require('mongoose')
const {contactSchema} = require('./contactSchema')

function AddContactData(data){
    main.main().then(
        async ()=>{
            let contactModel ;
            // console.log("Contact Schema",contactSchema)
            try{
                contactModel = mongoose.model("contact_details",contactSchema);
            }
            catch{
                contactModel = mongoose.model("contact_details");
            }
            console.log(data);
            const newData = {
                name:data.name,
                email:data.email,
                phone:data.phone,
                desc:data.desc,
                date:Date.now()
            }
            contactModel.create(newData,(err,item)=>{
                if(err){
                    console.error(err)
                }
                else{
                    console.log("item",item)
                    console.log("Data is added")
                }
            })
        }
    ).catch(err=>{
        console.error(err);
    })

}

module.exports = {AddContactData}
