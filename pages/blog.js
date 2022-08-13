import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import styles from '../styles/BlogList.module.css'
import Link from 'next/link';


const Blog = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    console.log("Use Effect Is running");

    fetch('http://localhost:3000/api/allBlogs')
    .then((data)=>{
      return data.json()
    })
    .then((fetchedData)=>{
      console.log(fetchedData)
      setData(fetchedData);
    })
  },[])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {data.map((blog)=>{
            console.log(blog)
            return <div key={blog.slug} className={styles.gridItem}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image src="/images/BPImg2.jpg" width={403.3} height={349}></Image>
              </div>
              <div className={styles.cardHeader}>
                <h1 className={styles.head}>{blog.Title}</h1>

                <p className={styles.content}>
                  {blog.para1.substr(0,100)} ....
                </p>

                <Link href={`/blogPost/${blog.slug}`}><button className={styles.cardBtn}>Visit <span>&rarr;</span></button></Link>
              </div>
            </div>
          </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Blog