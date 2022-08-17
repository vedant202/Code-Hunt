import React from "react";
import styles from "../styles/addBlog.module.css";

const AddBlog=()=>{
    console.log("Add Blog")
    return (
        <div className={styles.addBlog}>
            <div className={styles.headTitle}>
                <h1>Adding Blog in Code Hunt</h1>
            </div>
            <hr />
            
            <form method="POST"
            enctype="multipart/form-data" action="">
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="Title" >Title : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="Title" id="Title" name="Title" rows={10} cols={110}></textarea>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="Author" >Author : </label>
                </div>
                <div className={styles.col2}>
                    <input className="Author" name="Author" id={styles.author}></input>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="para1" >Para 1 : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="para1" id="para1" name="para1" rows={20} cols={110} ></textarea>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="para2" >Para 2 : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="para2" id="para2" name="para2" rows={20} cols={110} ></textarea>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="para3" >Para 3 : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="para3" id="para3" name="para3" rows={20} cols={110} ></textarea>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="slug" >Slug : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="slug" id="slug" name="slug" rows={3} cols={110} ></textarea>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <label htmlFor="metaDesc" >Meta Desc : </label>
                </div>
                <div className={styles.col2}>
                    <textarea className="metaDesc" id="metaDesc" name="metaDesc" rows={10} cols={110} ></textarea>
                </div>
            </div>

            <div className={styles.imageControl}>
            <input
                type="file"
                name="file"
                id="input-image"
                className={styles.image}
              />
            </div>

            <div className={styles.submitBtn}>
                <button className="submit" type="submit" id={styles.submit}>Submit</button>
            </div>
            </form>
        </div>
    );
};

export default AddBlog;