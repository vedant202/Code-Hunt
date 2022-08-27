import React, { useEffect,useState } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
// import Image from 'next/image'
import mongoose from "mongoose";


const Slug = (props) => {
  const [data, setData] = useState(props.jsonParsed)

  // const router = useRouter();
  // useEffect(()=>{
  //   if(!router.isReady) return
  //   const  { slug }= router.query; 
  //   fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
  //   .then((data)=>{
  //     return data.json()
  //   })
  //   .then((fetched)=>{
  //     console.log("Fetched",fetched)
  //     setData(fetched)
  //   })
  // },[router.isReady])
    
  console.log("Data",data)
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Head}>
        <h1>{data && data[0].Title}</h1>

        <div className={styles.author}>
          <h4>{data && data[0].Author}</h4>
        </div>
        <span className={styles.hr}>
          <hr />
        </span>
      </div>

      <div className={styles.mainBody}>
          <div className={styles.content1}>
          {data && data[0].para1}
          </div>
          <div className={styles.rImage}>
            {/* <Image src="/images/item2.jpg" width={345} height={345}></Image> */}
            <img src="/images/item2.jpg" width={345} height={345} alt="code hunt image" />
          </div>
          <div className={styles.content2}>
            <p>
            {data && data[0].para2}
            </p>
            <p>
            {data && data[0].para3}
            </p>
          </div>
        </div>
    </div>
  )
}

// For Server-Side-Rendering

// export async function getServerSideProps(context){
//   let { slug } = context.query;
//   console.log(slug)

//   let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
//   let blog = await data.json();

//   return {
//     props:{blog}
//   }

// }

//If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.

export async function getStaticPaths(){
  let allSlug;
  try {
    let mongooseConnect = await mongoose.connect("mongodb://localhost:27017/code_hunt");
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

    
    let blogModel 
    try{
      blogModel = mongoose.model("blogs")
    }catch(error){
      blogModel = mongoose.model("blogs",blogSchema)

    }
  
    allSlug = await blogModel.find({},'slug').exec()
    console.log("All Slugs in blogpost")
    
  } catch (error) {

    console.log(error)
  }
  
  let slugs = allSlug.map(slug=>{
    console.log(slug.slug)
    return {params :{slug:slug.slug}}
  })
  console.log(slugs)
  return {
    paths:slugs,
    fallback:false,
  }
}

//For Static site rendering

export async function getStaticProps(context){
  let blog
  let { slug } = context.params
  try {
    let mongooseConnect = await mongoose.connect("mongodb://localhost:27017/code_hunt");
    const blogSchema = new mongoose.Schema({
      Title: String,
      Author: String,
      Date: Date,
      img: {
        data: Buffer,
        contentType: String,
      },
      para1: String,
      para2: String,
      para3: String,
      slug: String,
    });

    let blogModel 
    try{
      blogModel = mongoose.model("blogs")
    }catch(error){
      blogModel = mongoose.model("blogs",blogSchema)

    }
    blog = await blogModel.find({ slug:slug }).exec()
  } catch (error) {
    console.log(error)
  }
  let jsonParsed = JSON.parse(JSON.stringify(blog));
  // console.log(jsonParsed)
  return {
    props:{jsonParsed}
  }
}

export default Slug