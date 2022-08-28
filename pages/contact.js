import React from 'react'
import styles from "../styles/Contact.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rows}>
        <div className={styles.col1}>
          <div className={styles.col1_head}>
            <h1>Contact Us</h1>
          </div>
          <div className={styles.col1_mid}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis quisquam facere quibusdam maiores culpa accusantium eaque distinctio neque provident. Id voluptatum nulla consequatur perferendis excepturi, saepe provident commodi at animi, dolore distinctio, sunt nam officiis ex assumenda debitis qui.</p>
          </div>
          <div className={styles.col1_foot}>
            <ul>
              <li>
                <span className={styles.streetLogo}><img src="/images/road.png" width={30} height={30} alt="code hunt image" />
                </span>
                34 Street Name, City Name Here,
                United States
              </li>
              <li>
                <span className={styles.phone}><img src="/images/phone.png" width={30} height={30} alt="code hunt image" />
                </span>
                +1 (222) 345 6789
              </li>
              <li>
                <span className={styles.mail}><img src="/images/mail.png" width={30} height={30} alt="code hunt image" />
                </span>
                info@mywebsite.com
              </li>

            </ul>
          </div>

          
        </div>
        <div className={styles.col2}>
            <form action="">
              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Name</label>
                  <input type="text" name='name' id='name' required/>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Email</label>
                  <input type="email" name='email' id='email' required/>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Phone</label>
                  <input type="phone" name='phone' id='phone' required/>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Message</label>
                  <input type="text" name='desc' id='desc' required/>
                </div>
              </div>

              <div className={styles.submitButton}>
                <button type="submit" name='submit' id='submit'>Send Message</button>
              </div>

            </form>
          </div>
      </div>

    </div>
  )
}

export default contact