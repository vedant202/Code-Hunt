import nextConnect from 'next-connect';
import multer from 'multer'
import { readFileSync,readFile } from 'fs';
import path from 'path';
import {blogSchema} from '../blogPostSchema'
import AddData from '../insertDataDb'


// const uploads = multer(
//     {
//         storage:multer.diskStorage({
//             destination: './public/uploads',
//             filename:(req,image,cb)=>cb(null, image.filename),
//         }),
//     }
// )


const fileStorageEngine = multer.diskStorage({
    destination:(req,image,cb)=>{
        cb(null,"./public/uploads");
    },
    filename:(req,image,cb)=>{
        cb(null,Date.now() + "--"+ image.originalname)
    }
})
const upload = multer({storage:fileStorageEngine})

const apiRoute = nextConnect({
    
    onNoMatch(req,res){
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
})


// const uploadMiddleware = uploads.array('image');
const uploadMiddleware = upload.single("image");

apiRoute.use(uploadMiddleware);

apiRoute.post((req,res)=>{
    console.log(req);
    const data = req.body;
    const imageFile = req.file;
    console.log("Image Name:- "+imageFile.filename);
    
    const blogData = {
        Title:data.Title,
                Author:data.Author,
                
                img:
                {
                    data: readFileSync("C:/Users/DELL/OneDrive/Documents/NextJs/code_hunt/public/uploads/"+imageFile.filename),
                    contentType: 'image/png',
                },
                para1:data.para1,
                para2:data.para2,
                para3:data.para3,
                slug:data.slug,
                metaDesc:data.metaDesc
    }
    
    console.log("Blog Data title :- "+blogData.Title+"Blog Data image :- "+blogData.Author);
    AddData(blogData) 
    res.status(200).json({ data: 'success' });
})

export default apiRoute;

export const config = {
    api:{
        bodyParser:false,
    },
};

// export default function blog(req,res){
//     // console.log("Succesfull")
//     // if(req.method=="POST"){
//     //     console.log(req.body)
//     //     res.status(200).json({ data: 'success' });

//     // }
//     // else{
//     //     res.status(200).json({data:"Error"})
//     // }
    
// }