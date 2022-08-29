import nc from "next-connect"
import { AddContactData } from "./insertContactData"


const handler = nc({
    onError:(err,req,res)=>{
        console.log(err.stack);
        res.status(500).end("Something broke!")
    },
    onNoMatch:(req,res)=>{
        res.status(404).send("Page not found!")
    },
})

handler.post((req,res)=>{
    // console.log(req.body);
    const con_data = req.body;
    let send_json;
    try{
        AddContactData(con_data);
        send_json = {data:"success"}
    }
    catch (err){
        console.log("Data is not added")
        send_json={data:"Failure"}
    }
    res.status(200).json(send_json);
})

export default handler;