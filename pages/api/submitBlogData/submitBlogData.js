import nextConnect from 'next-connect';
import multer from 'multer'

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
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
      },
    onNoMatch(req,res){
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
})


// const uploadMiddleware = uploads.array('image');
const uploadMiddleware = upload.single("image");

apiRoute.use(uploadMiddleware);

apiRoute.post((req,res)=>{
    console.log(req.body)
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