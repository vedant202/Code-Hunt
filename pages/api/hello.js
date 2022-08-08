// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import main from "./connectionMongoDb"



export default function handler(req, res) {
  main().catch(err=>{
    console.log(err);
  })
  res.status(200).json({ name: 'John Doe' })
}
