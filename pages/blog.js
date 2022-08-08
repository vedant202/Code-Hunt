import React from 'react'
import Image from 'next/image'
import styles from '../styles/BlogList.module.css'


const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image src="/images/BPImg2.jpg" width={403.3} height={349}></Image>
              </div>
              <div className={styles.cardHeader}>
                <h1 className={styles.head}>Javascript Tutorial</h1>

                <p className={styles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis accusantium excepturi nam laudantium aliquam neque ea atque assumenda repellendus repellat? Expedita nemo illo reiciendis quo veniam assumenda quis? Rerum.
                </p>

                <button className={styles.cardBtn}>Visit <span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image src="/images/BPImg3.jpg" width={403.3} height={349}></Image>
              </div>
              <div className={styles.cardHeader}>
                <h1 className={styles.head}>Python Tutorial</h1>

                <p className={styles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis accusantium excepturi nam laudantium aliquam neque ea atque assumenda repellendus repellat? Expedita nemo illo reiciendis quo veniam assumenda quis? Rerum.
                </p>

                <button className={styles.cardBtn}>Visit <span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image src="/images/BPImg4.jpg" width={403.3} height={349}></Image>
              </div>
              <div className={styles.cardHeader}>
                <h1 className={styles.head}>C++ Tutorial</h1>

                <p className={styles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis accusantium excepturi nam laudantium aliquam neque ea atque assumenda repellendus repellat? Expedita nemo illo reiciendis quo veniam assumenda quis? Rerum.
                </p>

                <button className={styles.cardBtn}>Visit <span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image src="/images/BPImg5.jpg" width={403.3} height={349}></Image>
              </div>
              <div className={styles.cardHeader}>
                <h1 className={styles.head}>C #</h1>

                <p className={styles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis accusantium excepturi nam laudantium aliquam neque ea atque assumenda repellendus repellat? Expedita nemo illo reiciendis quo veniam assumenda quis? Rerum.
                </p>

                <button className={styles.cardBtn}>Visit <span>&rarr;</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog