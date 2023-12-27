import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component, useState } from 'react';
import Router from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import { post } from '../libraries/httpService';

export default function Home() {
  const [user,setUser]= useState({
    email:"",
    password:""
  })
  const [error, setError] = useState();
const[isLoading,setIsLoading] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("");
    setIsLoading(true);
    try {
      let {data} = await post("login",{email:user.email,password: user.password});
       console.log(data,'data');
       if(data?.accessToken){
        localStorage.setItem("user", JSON.stringify(data));
        setTimeout(() => {
          // Router.push(sessionStorage.getItem("lastUrl"));
          Router.push("/");
        }, 1000);
       }else{
        setIsLoading(false);
        setError("Unable to login to your account, Please try again");
       }
    } catch (error) {
      console.log(error,'error');
      setIsLoading(false);
      setError(error?.response?.data?.message)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Lottery App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'></link>
        <link href="https://fonts.cdnfonts.com/css/style-script" rel="stylesheet"></link>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>


      <div className={styles.login_bg}>
        <div className={styles.login_left}>
          <img src='/logo.png' className={styles.logo_img} />
        </div>
        <div className={styles.login_right}>
          <div className={styles.login_right_inner}>
            <label className={styles.login_label}>LOGIN</label>
            {error&&<div className='error' style={{color:'red'}}>{error}</div>}
            <div className={styles.login_form}>
              <form onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <img src='/user.png' className={styles.img_user} />
                  <input className={styles.field_style} type="email" id="email" name="email" placeholder='Email'onChange={handleChange} required/>
                </div>

                <div className={styles.field}>
                  <img src='/lock.png' className={styles.img_lock} />
                  <img src='/eye.png' className={styles.img_eye} />
                  <input className={styles.field_style} type="password" id="password" name="password" placeholder='Password' onChange={handleChange} required/>
                  {/* <label className={styles.login_forgot}>Forgot password?</label> */}
                </div>
                <div className={styles.login_btn_wrap}>
                  <button className={styles.login_btn} type="submit">Log In</button>
                </div>
              </form>
              <div>
                <label className={styles.login_or}>OR</label>
              </div>
              <div className={styles.login_btn_wrap1}>
                <input className={styles.login_google} type="submit" value="Continue with Google" />
                <img src='/google.png' className={styles.img_google} />
              </div>
              <div>
                <label className={styles.login_or}>Not on Lottech yet?<span className={styles.login_signup}> Sign up</span></label>
              </div>
            </div>
          </div>
        </div>

      </div>










    </div>





  );


}
