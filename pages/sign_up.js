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
          <div className={styles.login_right_inner1}>

            <div className={styles.login_form}>
            
              <div className={styles.field1}>
             <label className={styles.field_label}>First  name</label>
                <input className={styles.field_style_signup} type="text" id="fname" name="fname" placeholder='First  name'/>
              </div>

              <div className={styles.field1}>
             <label className={styles.field_label}>Last  name</label>
                <input className={styles.field_style_signup} type="text" id="fname" name="fname" placeholder='Last  name'/>
              </div>

              <div className={styles.field1}>
             <label className={styles.field_label}>Email</label>
                <input className={styles.field_style_signup} type="text" id="fname" name="fname" placeholder='Email'/>
              </div>

              <div className={styles.field1}>
             <label className={styles.field_label}>Password</label>
                <input className={styles.field_style_signup} type="text" id="fname" name="fname" placeholder='Password'/>
              </div>


              <div className={styles.field1}>
             <label className={styles.field_label}>Confirm Password</label>
                <input className={styles.field_style_signup} type="text" id="fname" name="fname" placeholder='Confirm Password'/>
              </div>


              
              <div className={styles.field1}>
             <label className={styles.field_label}>Phone Number</label>
                <input className={styles.field_style_signup} type="text" id="fname" name="fname" placeholder='Phone Number'/>
              </div>
            

              <div className={styles.checkbox_wrapper}>
        <input className={styles.checkbox_wrap1} type="checkbox" id="vehicle1" name="vehicle1" value="" />
        <label className={styles.login_or}>By signing up I agree with <span className={styles.login_signup}>terms and conditions</span></label>
        </div>
          
              <div  className={styles.login_btn_wrap}>
                <input  className={styles.login_btn}type="submit" value="Sign Up" />
              </div>

           
              <div>
                <label className={styles.login_or}>Already have an account? <span className={styles.login_signup}>Log In</span></label>
              </div>
            </div>
          </div>
        </div>

      </div>










    </div>





  );


}
