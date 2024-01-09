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
        <img src='/grid_3.png' className={styles.draw_img} />
      </div>




      <div className={styles.draw_title_layout}>
        <label className={styles.label_main}>
          ACCRUED AMOUNT
        </label>
        <p className={styles.second_lable}>
          as of Wednesday, 18 October 2023
        </p>

      </div>


      <div className={styles.draw_box_wrap}>

        <div className={styles.draw_win_box}>
          ₹ 3,00,00,000
        </div>
      </div>


      <div className={styles.draw_next_time}>
        <label className={styles.draw_next_time_label}>TIME TILL NEXT DRAW</label>
        <div className={styles.flex_container3}>
          <div>0</div>
          <div>6</div>
          <div className={styles.without_box_draw}>:</div>
          <div>2</div>
          <div>8</div>
          <div className={styles.without_box_draw}>:</div>
          <div>1</div>
          <div>9</div>

        </div>



      </div>


      <div className={styles.draw_title_layout}>
        <label className={styles.label_main}>
          Recent winners
        </label>
        <p className={styles.second_lable}>
          We update our website regularly, more and more winners are added every day!
          to locate the most recent winners information
        </p>

        <img src='/first_prize.gif' className={styles.prize_img} />
        <div className={styles.first_prize_number}>
          <label className={styles.first_prize_number_bubble}>18</label>
          <label className={styles.first_prize_number_bubble}>24</label>
          <label className={styles.first_prize_number_bubble}>08</label>
          <label className={styles.first_prize_number_bubble}>16</label>
          <label className={styles.first_prize_number_bubble}>14</label>
        </div>

        <label className={styles.second_prize_number}>2nd Prize </label>

        <div className={styles.first_prize_number}>
          <label className={styles.second_prize_number_bubble}>18</label>
          <label className={styles.second_prize_number_bubble}>24</label>
          <label className={styles.second_prize_number_bubble}>08</label>
          <label className={styles.second_prize_number_bubble}>16</label>
          <label className={styles.second_prize_number_bubble}>14</label>
        </div>

        <label className={styles.second_prize_number}>3rd Prize </label>

        <div className={styles.first_prize_number}>
          <label className={styles.second_prize_number_bubble}>18</label>
          <label className={styles.second_prize_number_bubble}>24</label>
          <label className={styles.second_prize_number_bubble}>08</label>
          <label className={styles.second_prize_number_bubble}>16</label>
          <label className={styles.second_prize_number_bubble}>14</label>
        </div>

        <button className={styles.draw_btn}>
          Previous winners
        </button>


        <div className={styles.how_to_win_wrap}>

          <label className={styles.how_to_win}><span className={styles.how_to_win_white}>How to</span> win</label>
        </div>


<div className={styles.jackpot_mainwrap}>
        <div className={styles.jackpot_wrap}>

          <label>JACKPOT</label>
          <div className={styles.jackpot_red_round_wrap}>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_red_round}></div>
          </div>
        </div>


        <div className={styles.jackpot_wrap}>

          <label className={styles.jackpot_label}>Any Order of all combinations</label>
          <div className={styles.jackpot_red_round_wrap}>
            <label className={styles.jackpot_label1}>RS 300, 00,00</label>
          </div>
        </div>

        </div>




        <div className={styles.jackpot_mainwrap1}>
        <div className={styles.jackpot_wrap}>

          <label>2nd PRIZE</label>
          <div className={styles.jackpot_red_round_wrap}>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_white_round}></div>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_red_round}></div>
          </div>
        </div>


        <div className={styles.jackpot_wrap}>

          <label className={styles.jackpot_label}>Any Order of all combinations</label>
          <div className={styles.jackpot_red_round_wrap}>
            <label className={styles.jackpot_label1}>RS 300, 00,00</label>
          </div>
        </div>

        </div>



        <div className={styles.jackpot_mainwrap}>
        <div className={styles.jackpot_wrap}>

          <label>3rd PRIZE</label>
          <div className={styles.jackpot_red_round_wrap}>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_white_round}></div>
            <div className={styles.jackpot_red_round}></div>
            <div className={styles.jackpot_white_round}></div>
            <div className={styles.jackpot_red_round}></div>
          </div>
        </div>


        <div className={styles.jackpot_wrap}>

          <label className={styles.jackpot_label}>Any Order of 3 combinations</label>
          <div className={styles.jackpot_red_round_wrap}>
            <label className={styles.jackpot_label1}>RS 5,000</label>
          </div>
        </div>

        </div>

      </div>





        <div className={styles.draw_title_layout1}>
        <label className={styles.label_main}>
        How to  <span className={styles.banner_title_pink}>participate</span>
        </label>
        <p className={styles.second_lable}>
        Buy a specialised product worth Rs. 500 from our site and stand a chance to participate in the raffle draw. 
          </p>
          <p className={styles.second_lable1}>
          The more products you buy, the more raffles you can redeem.
          </p>

      </div>



      <button className={styles.buy_now}>BUY NOW</button>

      <footer className={styles.footer_wrap}>
<div className={styles.footer_left}>
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, 
sed do eiusmod tempor         
</div>
<div className={styles.footer_middle}>
<input type="text" placeholder="Search.." className={styles.search}/>
<img src='/arrow.png' className={styles.arrow_img}/>
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
 
<img src='/s_1.png' className={styles.social_img}/>
<img src='/s_2.png' className={styles.social_img}/>
<img src='/s_3.png' className={styles.social_img}/>
<img src='/s_5.png' className={styles.social_img}/>
<img src='/s_6.png' className={styles.social_img}/>

</div>
</div>

</footer>
    </div>





  );


}
