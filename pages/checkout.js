import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import AddressModalPopup from "../components/addressmodal";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useBackend } from '../hooks/useBackend';
import { userData } from "../libraries/auth/user";

export default function Home() {
  const router = useRouter();
  const [addressmodal, setAddressModalShow] = React.useState(false);
  const [addressData, setAddressData] = useState('')
  let userDetails = userData();
 
  const { rows: address, update: updateAddress, delete: deleteAddress, setFilter } = useBackend("address", { sort: { sortOrder: "DESC", sortField: "id" }, deleteUrl: "address", updateUrl: "address" });
  const { update: createOrder, setFilter: orderFilter } = useBackend("orders", {});
  const { update: verifyOrder } = useBackend("payment/paymentverification", {});
  
  const [checkoutData, setCheckoutData] = useState({})
  useEffect(() => {
    if (!userDetails) {
      sessionStorage.setItem("lastUrl", window.location.href)
      window.location.href = "/login";
    }
    const checkoutData = JSON.parse(sessionStorage.getItem('checkoutData'))
    setCheckoutData(checkoutData)
  }, [])
  
  const {quantity, orderAmount,price, purchaseThreshold,productId,eventId} = checkoutData

  const [selectedAddress, setSelectedAddress] = useState(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
  const handleCheckout = async (e) => {
    e.preventDefault()
    const couponNumber = Math.floor(orderAmount / purchaseThreshold);
    const orderItems = []
    const item = { quantity, productId, orderAmount, price }
    orderItems.push(item)
    const order = await createOrder({ orderAmount, orderItems });

    if (order) {
      var options = {
        key: "rzp_test_F6WOMA8GfzTV9U", // Enter the Key ID generated from the Dashboard
        orderAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Lottery Tech Corp", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order[0].id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

        handler: async function (response) {

          const { razorpay_payment_id: payment_id, razorpay_order_id: order_id, razorpay_signature: signature } = { ...response };

          const validateRes = await verifyOrder({ order_id, payment_id, signature })

          if (validateRes[2].success == true) {
            router.push(`/congratulations_screen/${order[0].id}/${couponNumber}/${eventId}`)
          } else {
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

  const handleAddressSubmit = async (addressData) => {
    await updateAddress(addressData)
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFilter({ user });
    }
  }, []);

  const handleAddAddress = () => {
    setAddressData({
      id: null,
      fullName: "",
      email: "",
      city: "",
      mobileNumber: "",
      street: "",
      pinCode: "",
      isDefault: false,
    });
    setAddressModalShow(true);
  };

  const handleEditAddress = (addressData) => {
    // Display the modal with the data of the selected address
    setAddressData(addressData);
    setAddressModalShow(true);
  };

  const handleDeleteAddress = async (item) => {
    console.log(item, 'idddddddddddddd');
    await deleteAddress(item)
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

      <AddressModalPopup show={addressmodal}
        onHide={() => setAddressModalShow(false)}
        onSubmit={handleAddressSubmit}
        addressDetails={addressData}>
      </AddressModalPopup>
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
        <lablel className={styles.hamburger_label}>Buy now /</lablel>
        <lablel className={styles.hamburger_label1}>Payment</lablel>
      </div>
      <div className={styles.draw_banner_wrap3}>


        <div className={styles.checkout_left}>
          <label className={styles.cart_middle_txt}>Checkout</label>

          <div className={styles.delivery_address}>
            Delivery Address



            <div className={styles.add_wrap1}>
              <div className={styles.add_wrap} onClick={() => handleAddAddress()}>
                Add +
              </div>

              <div className={styles.add_wrap}>
                Change
              </div>
            </div>



          </div>
          <form onSubmit={handleCheckout}>
            {address?.filter(item => !item.isDelete).map((item) => {
              return (
                <div className={styles.username_mainwrap}>
                  <div className={styles.username_wrap}>
                    <div className={styles.radio_wrap}>
                      <input type='radio' name='address' onChange={() => setSelectedAddress(item.id)} /> {item.fullName}         <span className={styles.user_pin}>PIN :{item.pinCode}</span>
                    </div>

                    <p className={styles.details}>{item.street}, {item.city},India</p>
                    <p className={styles.details}>{item.email}, {item.mobileNumber}</p>
                  </div>
                  <div>
                    <button onClick={() => handleEditAddress(item)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteAddress(item)}>
                      Delete
                    </button>
                  </div>

                </div>
              )
            })}
            <div className={styles.payment_method}>Payment Method</div>


            <div className={styles.radio_wrap}>
              <input type="radio" value="Razorpay" name="paymentMethod" onChange={() => setSelectedPaymentMethod("Razorpay")} /> Razorpay
            </div>

            <div className={styles.credit_card_wrap}>
              <img src='/Razorpay_logo.webp' className={styles.nav_icons1} />
              {/* <img src='/mastercard 1.png' className={styles.nav_icons1} />
            <img src='/payment 1.png' className={styles.nav_icons1} />
            <img src='/payment (1) 1.png' className={styles.nav_icons1} />
            <img src='/payment (2) 1.png' className={styles.nav_icons1} /> */}
            </div>
            <button type='submit'>Proceed to payment</button>
          </form>

          {/* <div className={styles.radio_wrap}>
            <input type="radio" value="Male" name="gender" /> UPI PAYMENT
          </div>
          <div className={styles.gpay_wrap}>
            <img src='/Group 1000005668.png' className={styles.nav_icons2} />
            <img src='/pngegg (6).png' className={styles.nav_icons2} />
            <img src='/payment 1.png' className={styles.nav_icons2} />
          </div> */}
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
            <label className={styles.total_price1}>₹ {price}</label>
          </div>




          <div className={styles.address_wrapper}>
            <label className={styles.total_label1}>Quantity</label>
            <label className={styles.total_price1}>{quantity} items</label>
          </div>



          <div className={styles.address_wrapper}>
            <label className={styles.total_label1}>Delivery</label>
            <label className={styles.total_price1}><span className={styles.yellow_label}>FREE</span></label>
          </div>
          <hr className={styles.line}></hr>
          <div className={styles.address_wrapper}>
            <label className={styles.total_label}>Total</label>
            <label className={styles.total_price}>₹ {quantity * price}</label>
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
