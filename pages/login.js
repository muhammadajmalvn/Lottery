import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Table from 'react-bootstrap/Table';
import Link from 'next/link';

export default function Home() {
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
            <div className={styles.login_form}>
            
              <div className={styles.field}>
              <img src='/user.png' className={styles.img_user}/>
                <input className={styles.field_style} type="text" id="fname" name="fname" placeholder='Your Name'/>
              </div>
            
              <div className={styles.field}>
              <img src='/lock.png' className={styles.img_lock}/>
              <img src='/eye.png' className={styles.img_eye}/>
                <input className={styles.field_style} type="text" id="lname" name="lname" placeholder='Password'/>
                <label className={styles.login_forgot}>Forgot password?</label>
              </div>
              <div  className={styles.login_btn_wrap}>
                <input  className={styles.login_btn}type="submit" value="Log In" />
              </div>

              <div>
                <label className={styles.login_or}>OR</label>
              </div>
              <div  className={styles.login_btn_wrap1}>
                <input  className={styles.login_google}type="submit" value="Continue with Google" />
                <img src='/google.png' className={styles.img_google}/>
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
