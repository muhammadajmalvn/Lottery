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
        <lablel className={styles.hamburger_label}>View Details /</lablel>
        <lablel className={styles.hamburger_label}>Our product /</lablel>
        <lablel className={styles.hamburger_label}>Buy now /</lablel>
        <lablel className={styles.hamburger_label1}>Payment</lablel>
      </div>
      <div className={styles.draw_banner_wrap3}>


        <div className={styles.checkout_left}>
          <label className={styles.cart_middle_txt}>Checkout</label>

          <div className={styles.delivery_address}>
            Delivery Address



            <div className={styles.add_wrap1}>
            

              <div className={styles.add_wrap}>
              Add New +
              </div>


            </div>



          </div>


          <div className={styles.username_mainwrap}>
            <div className={styles.username_wrap}>
              <div className={styles.radio_wrap}>
                <input type="radio" value="Male" name="gender" /> Username         <span className={styles.user_pin}>PIN :555417</span>
              </div>

              <p className={styles.details}>Chaitanya Bharathi Institute of Engineering, Chaitanya Bharati P.O Treasure Island Gokarting Track
                Gandipet mandal, Telangana , India</p>
            </div>
            <div>

            </div>

            <div className='edit_delete_wrap'>
              <img  className={styles.edit_img} src='/edit_icon.png'/>
              <img className={styles.edit_img} src='/delete_icon.png'/>
            </div>
          </div>

          <div className={styles.username_mainwrap}>
            <div className={styles.username_wrap}>
              <div className={styles.radio_wrap}>
                <input type="radio" value="Male" name="gender" /> Username         <span className={styles.user_pin}>PIN :555417</span>
              </div>

              <p className={styles.details}>Chaitanya Bharathi Institute of Engineering, Chaitanya Bharati P.O Treasure Island Gokarting Track
                Gandipet mandal, Telangana , India</p>
            </div>
            <div>

            </div>

            <div className='edit_delete_wrap'>
              <img  className={styles.edit_img} src='/edit_icon.png'/>
              <img className={styles.edit_img} src='/delete_icon.png'/>
            </div>
          </div>
          <div className={styles.payment_method}>Payment Method</div>


          <div className={styles.radio_wrap}>
            <input type="radio" value="Male" name="gender" /> CREDIT / DEBIT CARD
          </div>

          <div className={styles.credit_card_wrap}>
            <img src='/visa 1.png' className={styles.nav_icons1} />
            <img src='/mastercard 1.png' className={styles.nav_icons1} />
            <img src='/payment 1.png' className={styles.nav_icons1} />
            <img src='/payment (1) 1.png' className={styles.nav_icons1} />
            <img src='/payment (2) 1.png' className={styles.nav_icons1} />
          </div>


          <div className={styles.radio_wrap}>
            <input type="radio" value="Male" name="gender" /> UPI PAYMENT
          </div>
          <div className={styles.gpay_wrap}>
          <img src='/Group 1000005668.png' className={styles.nav_icons2} />
            <img src='/pngegg (6).png' className={styles.nav_icons2} />
            <img src='/payment 1.png' className={styles.nav_icons2} />
          </div>
          <p className={styles.need_help}>
          Need help? Check our help page or contact us
When your order is placed, we'll send you an e-mail message 
acknowledging receipt of your order. If you choose to pay using 
an electronic payment method (credit card, debit card or net banking), 
you will be directed to your bank's website to complete your payment. 
Your contract to purchase an item will not be complete until we receive 
your electronic payment and dispatch your item . Need to add more items 
to your order? Continue shopping on this website.
          </p>
        </div>



        <div className={styles.checkout_right}>

          



          <label className={styles.deliver_address}>PRICE SUMMARY</label>
          <hr className={styles.line}></hr>

          <div className={styles.address_wrapper}>
            <label className={styles.total_label1}>Product selected</label>
            <label className={styles.total_price1}>₹ 500</label>
          </div>


  

          <div className={styles.address_wrapper}>
            <label className={styles.total_label1}>Quantity</label>
            <label className={styles.total_price1}>3 items</label>
          </div>


          
          <div className={styles.address_wrapper}>
            <label className={styles.total_label1}>Delivery</label>
            <label className={styles.total_price1}><span className={styles.yellow_label}>FREE</span> ₹40</label>
          </div>
          <hr className={styles.line}></hr>
          <div className={styles.address_wrapper}>
            <label className={styles.total_label}>Total</label>
            <label className={styles.total_price}>₹ 1500</label>
          </div>

       

        </div>





      </div>



      <div className={styles.shopping_lable_wrap}>
        <p className={styles.shopping_lable}>
          Continue shopping for
        </p>

      </div>

      <div className={styles.product_grid_wrap_main}>
        <div className={styles.product_grid_wrap}>
          <div className={styles.product_grid1}>
            <div className={styles.product_grid_img_wrap}>
              <img src='/28.png' className={styles.product_grid_img} />
              <label className={styles.product_grid_price}>RS 500</label>
              <div className={styles.product_grid_cart} >
                <img src='/shopping-cart-pink.png' className={styles.product_grid_cart_img} />
              </div>

            </div>
            <div className={styles.product_label_wrap}>
              <label className={styles.product_label}>Draw By Chance Signature Pen</label>


              <label className={styles.product_label1}>Buy our signature pen worth Rs. 500 to stand a chance to participate in this  raffle draw. One pen is equal to one raffle entry.</label>

            </div>
          </div>

          <button className={styles.view_details_btn}>View Details</button>

        </div>

        <div className={styles.product_grid_wrap}>
          <div className={styles.product_grid1}>
            <div className={styles.product_grid_img_wrap}>
              <img src='/27.png' className={styles.product_grid_img} />
              <label className={styles.product_grid_price}>RS 500</label>
              <div className={styles.product_grid_cart} >
                <img src='/shopping-cart-pink.png' className={styles.product_grid_cart_img} />
              </div>

            </div>
            <div className={styles.product_label_wrap}>
              <label className={styles.product_label}>Draw By Chance Signature Pen</label>


              <label className={styles.product_label1}>Buy our signature pen worth Rs. 500 to stand a chance to participate in this  raffle draw. One pen is equal to one raffle entry.</label>

            </div>
          </div>

          <button className={styles.view_details_btn}>View Details</button>

        </div>

        <div className={styles.product_grid_wrap}>
          <div className={styles.product_grid1}>
            <div className={styles.product_grid_img_wrap}>
              <img src='/26.png' className={styles.product_grid_img} />
              <label className={styles.product_grid_price}>RS 500</label>
              <div className={styles.product_grid_cart} >
                <img src='/shopping-cart-pink.png' className={styles.product_grid_cart_img} />
              </div>

            </div>
            <div className={styles.product_label_wrap}>
              <label className={styles.product_label}>Draw By Chance Signature Pen</label>


              <label className={styles.product_label1}>Buy our signature pen worth Rs. 500 to stand a chance to participate in this  raffle draw. One pen is equal to one raffle entry.</label>

            </div>
          </div>

          <button className={styles.view_details_btn}>View Details</button>

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
