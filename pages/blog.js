import React, { useEffect, useState } from "react";
// import Image from "next/image";
import styles from "../styles/BlogList.module.css";
import Link from "next/link";
import mongoose from "mongoose";

const Blog = (props) => {
  // console.log(props);
  const [data, setData] = useState(props.jsonParsed);

  // useEffect(()=>{
  //   console.log("Use Effect Is running");

  //   fetch('http://localhost:3000/api/allBlogs')
  //   .then((data)=>{
  //     return data.json()
  //   })
  //   .then((fetchedData)=>{
  //     console.log(fetchedData)
  //     setData(fetchedData);
  //   })
  // },[])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {data.map((blog) => {
            console.log(blog);
            return (
              <div key={blog.slug} className={styles.gridItem}>
                <div className={styles.card}>
                  <div className={styles.cardImg}>
                    {/* <Image
                      src="/images/BPImg2.jpg"
                      width={403.3}
                      height={349}
                    ></Image> */}
                    <img src="/images/BPImg2.jpg" width={403.3} height={349} alt="code hunt image" />
                  </div>
                  <div className={styles.cardHeader}>
                    <h1 className={styles.head}>{blog.Title}</h1>

                    <p className={styles.content}>
                      {blog.para1.substr(0, 100)} ....
                    </p>

                    <Link href={`/blogPost/${blog.slug}`}>
                      <button className={styles.cardBtn}>
                        Visit <span>&rarr;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// For Server-Side-Rendering

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/allBlogs')
//   let allBlogs = await data.json()

//   return {
//     props:{allBlogs}
//   }
// }

//For Static site generation

export async function getStaticProps(context) {
  let allBlogs

  try{
    let mongooseConnect = await mongoose.connect(
      "mongodb://localhost:27017/code_hunt"
    );
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
    // let blogModel = mongoose.model("Blogs",blogSchema)
    allBlogs = await blogModel.find().exec()
    
  }
  catch(e){
    console.log(e)
  }
  let jsonParsed = JSON.parse(JSON.stringify(allBlogs))
  console.log(jsonParsed)

  return {
    props: {jsonParsed},
  };
}

export default Blog;
