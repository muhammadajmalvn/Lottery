import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import React, { Component, useEffect, useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Router, { useRouter } from "next/router";

import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import { useBackend } from '../../../hooks/useBackend';
import { post } from '../../../libraries/httpService';

export default function Home() {
  const router = useRouter();
  const { eventId, productId } = router.query;
  const { rows: product, setFilter } = useBackend("event-products/event-details", { noGet: true });
  const { update: createOrder, setFilter: orderFilter } = useBackend("orders", {});
  const { update: verifyOrder} = useBackend("payment/paymentverification", {});
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    if (eventId || productId) {
      setFilter({
        eventId,
        productId
      });
    }
  }, [eventId, productId]);
  const handleCheckout = async (quantity, orderAmount, price) => {
    console.log(quantity, orderAmount, productId, price);
    const orderItems = []
    const item = { quantity, productId, orderAmount, price }
    orderItems.push(item)
    const response=await createOrder({orderAmount,orderItems});
    if (response) {
      var options = {
        key: "rzp_test_F6WOMA8GfzTV9U", // Enter the Key ID generated from the Dashboard
        orderAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency:"INR",
        name: "Lottery Tech Corp", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: response[0].id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          const { razorpay_payment_id: payment_id, razorpay_order_id: order_id, razorpay_signature: signature } = { ...response };
          const validateRes = await verifyOrder({order_id,payment_id,signature})
          console.log(validateRes[2].success,'validation result');
          if (validateRes[2].success==true) {
            Router.push('/congratulations_screen')
          }else{
            alert('Payment verification failed')
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: "ABC", //your customer's name
          email: "abc@example.com",
          contact: "9000000000", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();
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
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
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
        <lablel className={styles.hamburger_label}>View Details /</lablel>
        <lablel className={styles.hamburger_label}>Our product /</lablel>
        <lablel className={styles.hamburger_label1}>Buy now</lablel>
      </div>
      {product?.map((item) => {
        return (
          <div className={styles.draw_banner_wrap2}>

            <div className={styles.cart_left}>
              <img src={item?.product?.imageUrl} className={styles.cart_img_selection} />

              <label className={styles.product_label}>About this item</label>
              <p className={styles.product_label1}>{item?.product?.productDescription} </p>
            </div>
            <div className={styles.cart_middle}>
              <label className={styles.cart_middle_txt}>{item?.product?.productName}</label>
              <div className={styles.star_wrap}>
                <label className={styles.star_label}>4.1</label>
                <img src='/star_yellow.png' className={styles.product_grid_cart_img} />
                <img src='/star_yellow.png' className={styles.product_grid_cart_img} />
                <img src='/star_yellow.png' className={styles.product_grid_cart_img} />
                <img src='/star_yellow.png' className={styles.product_grid_cart_img} />
                <img src='/star_white.png' className={styles.product_grid_cart_img} />
              </div>

              <hr className={styles.line}></hr>


              <div className={styles.rate_wrapper}>

                <div>
                  <label className={styles.rate}>₹ {item?.product?.sellPrice}</label>
                  {/* <label className={styles.offer}>₹ 900</label> */}
                </div>

                <div className={styles.price_box_wrapper} >
                  <label className={styles.quantity}>Quantity</label>
                  <div className={styles.price_box}>
                    <label
                      onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
                      className={quantity === 1 ? styles.disabled : ''}
                    >
                      -
                    </label>
                    <label>{quantity}</label>
                    <label onClick={(e) => setQuantity(quantity + 1)}>+</label>
                  </div>

                </div>

              </div>
              <hr className={styles.line}></hr>



              <div className={styles.free_delivery}>

                <div>
                  <div className={styles.product_grid_cart_img_wrap}>
                    <img src='/bus.png' className={styles.product_grid_cart_img} />
                  </div>
                  <label>Free delivery</label>
                </div>
                <div>
                  <div className={styles.grey_box_padding}>
                    <label className={styles.size_label}>Size:</label>

                    <label className={styles.grey_box}>8UK</label>
                    <label className={styles.grey_box}>9UK</label>
                    <label className={styles.grey_box}>10UK</label>
                  </div>

                  <div className={styles.label_colour_wrap}>
                    <label className={styles.label_colour}>Colour:</label>
                    <label className={styles.label_colour1}>BLUE SKY</label>
                  </div>


                </div>

              </div>

              <div>
                <lablel className={styles.product_label}>Product details</lablel>
                <p className={styles.product_label1}>{item?.product?.productDescription} </p>
              </div>
            </div>

            <div className={styles.cart_right}>

              <img src='/advertisement.png' className={styles.advertisment_img} />
              <div className={styles.location_wrap}>

                <img className={styles.map_pin} src='/map-pin.png' />
                <label className={styles.deliver_to}>Deliver to</label>
              </div>
              <label className={styles.deliver_address}>ADDRESS</label>
              <hr className={styles.line}></hr>


              <label className={styles.product_label}>Delivery by 30 Dec, Saturday  |  <span className={styles.yellow_label}>FREE</span> ₹40</label>
              <label className={styles.yellow_label}>10 Days Return Policy</label>



              <label className={styles.deliver_address}>PRICE SUMMARY</label>
              <hr className={styles.line}></hr>


              <div className={styles.deliver_address_wrap}>
                <label className={styles.deliver_address1}>Product selected</label>
                <label className={styles.deliver_address1}>₹ {item?.product?.sellPrice}</label>
              </div>


              <div className={styles.deliver_address_wrap}>
                <label className={styles.deliver_address1}>Quantity</label>
                <label className={styles.deliver_address1}>{quantity} item</label>
              </div>
              <hr className={styles.line}></hr>
              <div className={styles.address_wrapper}>
                <label className={styles.total_label}>Total</label>
                <label className={styles.total_price}>₹ {quantity * item?.product?.sellPrice}</label>
              </div>

              <button className={styles.cart_add}>Add To Cart</button>
              <button className={styles.checkout_btn} onClick={(e) => {
                handleCheckout(quantity, quantity * item?.product?.sellPrice, item?.product?.sellPrice)
              }}>Checkout</button>


            </div>





          </div>
        )
      })}


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
