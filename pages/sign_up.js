import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component, useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useBackend } from '../hooks/useBackend'
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import Router from "next/router";

export default function Home() {
  const { update: signupUser } = useBackend("signup/roles", { noGet: true })
    const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword:"",
    phone: ""
  });
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.password == user.confirmPassword) {
        const response = await signupUser({ email: user.email, password: user.password, name: user.fname + ' ' + user.lname, phoneNumber: user.phone })
        if (response){
          setError('')
          Router.push('/login')
        }
      }else{
        setError('Password and confirm password should match')
      }  
    } catch (error) {
      console.log(error, 'error');
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
          <div className={styles.login_right_inner1}>
            <div className={styles.login_form}>
              {error&&<div className='error' style={{color:'red'}}>{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className={styles.field1}>
                  <label className={styles.field_label}>First Name</label>
                  <input className={styles.field_style_signup} type="text" id="fname" name="fname" placeholder='Enter your first name' onChange={handleChange} required/>
                </div>

                <div className={styles.field1}>
                  <label className={styles.field_label}>Last Name</label>
                  <input className={styles.field_style_signup} type="text" id="lname" name="lname" placeholder='Enter your last name' onChange={handleChange} required/>
                </div>

                <div className={styles.field1}>
                  <label className={styles.field_label}>Email</label>
                  <input className={styles.field_style_signup} type="text" id="email" name="email" placeholder='Enter your email' onChange={handleChange} required/>
                </div>

                <div className={styles.field1}>
                  <label className={styles.field_label}>Password</label>
                  <input className={styles.field_style_signup} type="password" id="password" name="password" placeholder='Enter your password' onChange={handleChange} required/>
                </div>

                <div className={styles.field1}>
                  <label className={styles.field_label}>Confirm Password</label>
                  <input className={styles.field_style_signup} type="password" id="confirmPassword" name="confirmPassword" placeholder='Confirm your password' onChange={handleChange} required/>
                </div>

                <div className={styles.field1}>
                  <label className={styles.field_label}>Phone Number</label>
                  <input className={styles.field_style_signup} type="text" id="phone" name="phone" placeholder='Enter your phone number' onChange={handleChange} required/>
                </div>

                <div className={styles.checkbox_wrapper}>
                  <input className={styles.checkbox_wrap1} type="checkbox" id="agreeTerms" name="agreeTerms" required />
                  <label className={styles.login_or}>By signing up I agree with <span className={styles.login_signup}>terms and conditions</span></label>
                </div>

                <div className={styles.login_btn_wrap}>
                  <button className={styles.login_btn} type='submit'>Signup</button>
                </div>
              </form>

              <div>
                <label className={styles.login}>Already have an account? <Link href="/login" className={styles.login_signup}>Log In</Link></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}