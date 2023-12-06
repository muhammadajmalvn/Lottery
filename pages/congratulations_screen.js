import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import Calendar from 'react-calendar'
import Modal from "../pages/modal";
import {useState} from "react";


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const title="Sneha";
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
        <lablel className={styles.hamburger_label1}>View Details</lablel>
      </div>
      <div className={styles.draw_banner_wrap}>

        <label className={styles.order_placed}><img src='/tick.png' className={styles.tick} />Your order has been placed !</label>
        <p className={styles.order_placed_sub}>We will notify you when your product has shipped.</p>
      </div>




      <div className={styles.draw_title_layout1}>
        <label className={styles.label_main}>
          CONGRATULATIONS
        </label>
        <p className={styles.second_lable}>
          “You have received  <span className={styles.label_pink}>4</span> tickets to participate in the Run 4 draw”
        </p>

      </div>



      <div className={styles.calender_wrap}>
        <div className={styles.calender_title}>
          <label className={styles.choose_number}>Choose your <span className={styles.choose_number_pink}>Numbers</span> </label>
        </div>


        <div className={styles.draw_run_wrap}>
          <label>Draw  : Run 4(4 tickets)</label>
          <label>Date  : 08 Nov 2023 - 15 Nov 2023</label>
        </div>


        <div className={styles.calendar_wrap}>
          <div className={styles.calendar}>
            <Calendar /></div>
          <div className={styles.calendar}>  <Calendar /></div>
        </div>
        <div className={styles.calendar_wrap}>
          <div className={styles.calendar}>  <Calendar /></div>
          <div className={styles.calendar}>  <Calendar /></div>
        </div>
        <div>
          <div className={styles.calendar_btn_wrap}>
            <div>
            <button className={styles.calendar_btn} onClick={() => setShowModal(true)}>Save choices</button>
            {showModal &&
            <Modal onClose={() => setShowModal(false)} 
            title={title}>
                Hello from the modal!
            </Modal>
        }
         </div>
          </div>

        </div>

      </div>















      <footer className={styles.footer_wrap}>
        <div className={styles.footer_left}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor
        </div>
        <div className={styles.footer_middle}>
          <input type="text" placeholder="Search.." className={styles.search} />
          <img src='/arrow.png' className={styles.arrow_img} />
          <div className={styles.footer_mid_sub}>
            <div className={styles.footer_mid_sub_grid}>
              <label className={styles.footer_mid_sub_grid_title}>Company</label>
              <label className={styles.footer_mid_sub_grid_subtitle}>About us</label>
              <label className={styles.footer_mid_sub_grid_subtitle}>Location</label>
              <label className={styles.footer_mid_sub_grid_subtitle}>Partners</label>

            </div>
            <div className={styles.footer_mid_sub_grid}>
              <label className={styles.footer_mid_sub_grid_title}>Terms</label>
              <label className={styles.footer_mid_sub_grid_subtitle}>Terms & Conditiond</label>
              <label className={styles.footer_mid_sub_grid_subtitle}>Privacy policy </label>
              <label className={styles.footer_mid_sub_grid_subtitle}>cookie Policy</label></div>
            <div className={styles.footer_mid_sub_grid}>
              <label className={styles.footer_mid_sub_grid_title}>Support</label>
              <label className={styles.footer_mid_sub_grid_subtitle}>Contact us</label>
              <label className={styles.footer_mid_sub_grid_subtitle}>FAQ</label>
            </div>
          </div>
        </div>

        <div className={styles.footer_right}>
          Follow us on
          <div className={styles.social_media_wrap}>

            <img src='/s_1.png' className={styles.social_img} />
            <img src='/s_2.png' className={styles.social_img} />
            <img src='/s_3.png' className={styles.social_img} />
            <img src='/s_5.png' className={styles.social_img} />
            <img src='/s_6.png' className={styles.social_img} />

          </div>
        </div>

      </footer>
    </div>





  );


}
