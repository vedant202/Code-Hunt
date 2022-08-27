import React from "react";
import { useState } from "react";
import styles from "../styles/addBlog.module.css";
import axios from "axios";


const AddBlog=()=>{
    
    const initialFormData = Object.freeze({
        "Title":"",
        "Author":"",
        "para1":"",
        "para2":"",
        "para3":"",
        "slug":"",
        "metaDesc":"",
        "image":""
        
    })

    const [formData, updateFormData] = useState(initialFormData);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData)

        const config = {
            headers:{'content-type':'multipart/form-data'},
        }
        try {
            const response = await axios.post('/api/submitBlogData/submitBlogData',formData,config)

            console.log(response.data);
        
        } catch (error) {
            console.error(error.response.data);
        }
        // console.log(formData);
    }


    const handleChange = (e)=>{
        updateFormData({
            ...formData,
            
            [e.target.name]: e.target.value
        }
        );
    }
    const handleChangeFile = (e)=>{
        console.log("Files",e.target.files)
        updateFormData({
            ...formData,
            [e.target.name]:e.target.files[0]
        })
    }


    console.log("Add Blog")
    return (
        <div className={styles.addBlog}>
            <div className={styles.headTitle}>
                <h1>Adding Blog in Code Hunt</h1>
            </div>
            <hr />
            
            <form method="POST"
            encType="multipart/form-data" action="">
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="Title" >Title : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="Title" id="Title" onChange={handleChange} name="Title" rows={10} cols={110}></textarea>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="Author" >Author : </label>
                </div>
                <div className={styles.col2}>
                    <input className="Author" name="Author" onChange={handleChange} id={styles.author}></input>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="para1" >Para 1 : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="para1" id="para1" onChange={handleChange} name="para1" rows={20} cols={110} ></textarea>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="para2" >Para 2 : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="para2" id="para2" onChange={handleChange} name="para2" rows={20} cols={110} ></textarea>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="para3" >Para 3 : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="para3" id="para3" onChange={handleChange} name="para3" rows={20} cols={110} ></textarea>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="slug" >Slug : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="slug" id="slug" name="slug" onChange={handleChange} rows={3} cols={110} ></textarea>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="metaDesc" >Meta Desc : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="metaDesc" id="metaDesc" onChange={handleChange} name="metaDesc" rows={10} cols={110} ></textarea>
                </div>
            </div>

            <div className={styles.imageControl}>
            <input
                type="file"
                name="image"
                onChange={handleChangeFile}
                id="image"
                className={styles.image}
              />
            </div>

            <div className={styles.submitBtn}>
                <button className="submit" onClick={handleSubmit} type="submit"  id={styles.submit}>Submit</button>
            </div>
            </form>
        </div>
    );
};

export default AddBlog;