import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHead}>
        <h1> ABOUT US </h1>

      </div>
      <section className={styles.section1}>
        <div className={styles.gridContainer1}>
          <div className={styles.item1}>
            <div className={styles.head}>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque modi, a ipsum quo cumque </h2>
            </div>
            <div className={`${styles.content} ${styles.contentColor}`}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta tenetur aspernatur, quos sunt nostrum esse enim ad a! Quo iusto officiis explicabo consectetur animi dolores excepturi esse aliquam iste distinctio.</p>
            </div>
          </div>

          <div className={styles.item2}>
            <span className={styles.item2Image}>
              <Image src="/images/item2.jpg" width={345} height={345}></Image>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.gridContainer2}>
          <div className={styles.C2item1}>
            <span className='C2Image2'>
              <Image src="/images/item3.jpg" width={409} height={239}></Image>
            </span>
          </div>
          <div className={styles.C2item2}>
            <div className={styles.head2}>
              <h2 className={`${styles.h2Fontsize} ${styles.h2FontFamily}`}>The first Shopify store was our own</h2>
            </div>
            <div className={`${styles.C2content2} ${styles.contentColor}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus aut ad eos ut, quidem quisquam, impedit eius deserunt qui nihil, nobis mollitia incidunt cum consectetur et fuga aperiam maxime.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section3}>
        <div className={styles.container3}>
          <div className={styles.C3head}>
            <h4>OUR MISSION</h4>

            <h2 className={`${styles.h2Fontsize} ${styles.h2FontFamily}`}>
          Making commerce better for everyone

          </h2>
          </div>

          <div className={`${styles.C3content} ${styles.contentColor}`}>
            <p>
            We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to business ownership to make commerce better for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section4}>
        <div className={styles.container4}>
          <div className={styles.C4item1}>
            <div className={styles.C4head}>
              <h4>OUR PEOPLE</h4>

              <h2 className={`${styles.h2Fontsize} ${styles.h2FontFamily}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque modi, a ipsum quo cumque similique excepturi minima accusamus iure temporibus deleniti incidunt vitae, esse consequuntur et adipisci aperiam. Mollitia, doloremque.</h2>
            </div>
            <div className={`${styles.C4content} ${styles.contentColor}`}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta tenetur aspernatur, quos sunt nostrum esse enim ad a! Quo iusto officiis explicabo consectetur animi dolores excepturi esse aliquam iste distinctio.</p>
            </div>
          </div>

          <div className={styles.C4item2}>
            <span className={styles.C4item2Image}>
              <Image src="/images/item4.jpg" width={399} height={266}></Image>
            </span>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About