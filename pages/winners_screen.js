import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import Calendar from 'react-calendar'
import ModalPopup from "./modal";
import { useState } from "react";


export default function Home() {


  return (


    <div className={styles.container}>

      <Head>
        <title>Lottery App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'></link>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Holtwood+One+SC" />
        <link href="https://fonts.cdnfonts.com/css/style-script" rel="stylesheet"></link>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>


      <div className={styles.navigation}>
        <ul className={styles.nav_style}>
          <li className={styles.list_style}>Contact us : 32564613164</li>
          <li className={styles.list_style}>Pricing</li>
          <li className={styles.list_style}>AED</li>
          <li className={styles.list_style}>English <img src='/Layer_1.png' className={styles.nav_icons} />
          </li>
        </ul>
      </div>
      <div className={styles.main_nav}>

        <ul className={styles.nav_style}>
          <li className={styles.list_style}>Draws
            <a href='/draw.js'></a></li>
          <li className={styles.list_style}>How to Play</li>
          <li className={styles.list_style}>Events</li>
          <li className={styles.list_style}>Deals & Offers</li>
          <li className={styles.list_style}>Winners</li>
          <li className={styles.list_style}>
            <img src='/shopping-cart.png' className={styles.nav_icons} />
          </li>
          <li className={styles.list_style}><img src='/bell.png' className={styles.nav_icons} /></li>
          <li className={styles.list_style}><img src='/settings.png' className={styles.nav_icons} /></li>
          <button className={styles.signup_btn}>Sign Up</button>
        </ul>
      </div>

      <div className={styles.hamburger_menu}>
        <lablel className={styles.hamburger_label}>Home/</lablel>
        <lablel className={styles.hamburger_label1}>Winners</lablel>
      </div>

      <div className={styles.run_wrap}>

      <div className={styles.left_wrap_winner}>
        <label></label>
            <label className={styles.run}>RUN<span className={styles.digit}>4</span></label>
            <label className={styles.yellow_label_winner}>₹3,00,00,000</label>

          </div>
      </div>
      <div className={styles.winners_banner_wrap}>
        <div className={styles.winners_wrap}>
       

          <div className={styles.draw_banner_wraper}>

       
            <img className={styles.ready_label} src='/title.png'/>
            <div className={styles.number_set}>
              <label className={styles.number}>00</label>
              <label className={styles.number}>00</label>
              <label className={styles.number}>00</label>
              <label className={styles.number}>00</label>
              <label className={styles.number}>00</label>
            </div>

            <div>
              <button className={styles.start_btn}>START</button>
            </div>

          </div>

        </div>

        <div className={styles.right_wrap_winner}>
          <div className={styles.winner_wrap}>
            <label className={styles.label_winner}>Winners</label>
          </div>
          <div className={styles.winners_list_wrap}>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>

            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            <div className={styles.list_label_wrap}>
              <label className={styles.list_label}>Ivana Tinkle</label>
              <div className={styles.white_bubble_wrap}>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>25</label>
                <label className={styles.white_bubble}>46</label>
                <label className={styles.white_bubble}>15</label>
                <label className={styles.white_bubble}>36</label>
              </div>

            </div>
            

          </div>

        </div>



      </div>

















    </div>





  );


}
