import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import Image from 'next/image'


const slug = () => {
    const router = useRouter();
    console.log(router.query)
    const {slug} = router.query; 

  return (
    <div className={styles.mainContainer}>
      <div className={styles.Head}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati rem necessitatibus incidunt fuga repudiandae autem quaerat quod vitae debitis!</h1>

        <div className={styles.author}>
          <h4>By Vedant Dhenge</h4>
        </div>
        <span className={styles.hr}>
          <hr />
        </span>
      </div>

      <div className={styles.mainBody}>
          <div className={styles.content1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti sint, perferendis explicabo eaque, aut ipsa non quod eum repellendus itaque nulla molestiae ducimus consequuntur dolorem excepturi doloremque aliquam. Nulla sit dicta voluptas omnis consectetur nihil nisi, officia perferendis tenetur aut! Eaque corrupti perspiciatis molestias. Totam, ut vel? Nesciunt nam vel id quia minus, mollitia deleniti illum consectetur dolore quam beatae maiores, unde laudantium tempore nemo a ut sapiente reiciendis enim, quidem cumque fuga asperiores. Dolor, consequuntur! Nihil quam quisquam, maiores iusto dolor, mollitia beatae vero excepturi aperiam dicta molestiae provident recusandae veniam, odio distinctio exercitationem voluptatum dolorum suscipit sunt!
          </div>
          <div className={styles.rImage}>
            <Image src="/images/item2.jpg" width={345} height={345}></Image>
          </div>
          <div className={styles.content2}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis architecto quasi perferendis excepturi dolorum voluptatibus? Consequatur accusamus obcaecati perspiciatis doloribus saepe? Ut, id numquam reiciendis tempora ex sapiente soluta eius dicta, veritatis molestiae aliquam minima possimus unde esse omnis perspiciatis sint iusto, illum excepturi alias laborum magnam. Perspiciatis, temporibus, minus ea voluptas reprehenderit cumque exercitationem dolorum nobis at natus deserunt in et laboriosam dolore mollitia architecto ipsa quo quam corporis magnam asperiores magni. Veritatis accusantium quam praesentium aliquid a earum reiciendis rerum laboriosam, perspiciatis illum vero? Nihil repudiandae temporibus nisi neque? A totam, cum alias quae aliquam maxime iusto. Vero id culpa cupiditate odio nemo nisi asperiores labore magnam recusandae, non quis, temporibus corporis ipsa, voluptatibus nesciunt est rerum inventore? Illo ipsum quisquam laboriosam. Recusandae corrupti commodi optio laudantium? Dolorum mollitia nobis eum blanditiis, natus quidem. Eum voluptate praesentium, nihil illum atque quaerat obcaecati veniam magni, ratione ipsa in.
            </p>
          </div>
        </div>
    </div>
  )
}

export default slug