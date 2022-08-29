import React,{useState} from 'react'
import styles from "../styles/Contact.module.css";
import axios from 'axios';

const contact = () => {
  
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')


  const emailValidate = (input)=>{
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.match(validRegex)){
      console.log("Valid Email");

    }
    else{
      console.log("Invalid email");
    }
  }

  const handleChange = (e)=>{
    console.log(e,"change")
    if(e.target.name=='name'){
      setname(e.target.value);
    }
    else if(e.target.name == 'email'){
      
      setemail(e.target.value);
    }
    else if(e.target.name == 'phone'){
      setphone(e.target.value);
    }
    else if(e.target.name == 'desc'){
      setdesc(e.target.value);
    }
  }
  
  const date = new Date();


  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data={
      name:name,
      email:email,
      phone:phone,
      desc:desc
    }
    emailValidate(email);
    try {
      const config = {
        headers:{'content-type':'application/json'}
      }
      let response = await axios.post('/api/submitContactData/postContactData',JSON.stringify(data),config);
      console.log(response.data)
    } catch (error) {
      
    }
    console.log(name,email,phone,desc);

  }

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
            <form onSubmit={handleSubmit} action="">
              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Name</label>
                  <input type="text" onChange={handleChange} name='name' id='name' required/>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Email</label>
                  <input type="email" onChange={handleChange} name='email' id='email' required/>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Phone</label>
                  <input type="tel" onChange={handleChange} name='phone' id='phone' required/>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Message</label>
                  <textarea type="text" onChange={handleChange} name='desc' rows={7} id='desc' required/>
                </div>
              </div>

              <div className={styles.submitButton}>
                <button type="submit"  name='submit' id='submit'>Send Message</button>
              </div>

            </form>
          </div>
      </div>

    </div>
  )
}

export default contact