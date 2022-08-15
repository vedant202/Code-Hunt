import React, { useEffect,useState } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import Image from 'next/image'


const slug = (props) => {
  const [data, setData] = useState(props.blog)

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
            <Image src="/images/item2.jpg" width={345} height={345}></Image>
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


export async function getServerSideProps(context){
  let { slug } = context.query;
  console.log(slug)

  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let blog = await data.json();

  return {
    props:{blog}
  }

}

export default slug