import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import { useBackend } from '../hooks/useBackend';
import Router from "next/router";

export default function Home() {
  const { rows: events } = useBackend("events/get-events", { sort: { sortOrder: "DESC", sortField: "id" } });
// Assuming 'events' is an array of event objects
const filteredEvents = events?.filter((event) => {
  // Get the current date and time
  const currentDate = new Date();

  // Parse the endDate from the event
  const endDate = new Date(event.endDate);

  // Check if the endDate is in the future
  if (endDate > currentDate) {
    // Calculate the difference in milliseconds between endDate and currentDate
    const timeDifference = endDate - currentDate;

    // Calculate the difference in hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    // Return true if the endDate is less than 48 hours from now
    return hoursDifference < 48;
  }

  // Exclude events with expired endDate
  return false;
});

// Now 'filteredEvents' contains only the events that meet the criteria and are not expired
console.log(filteredEvents);


  let onViewDetailsClick = (e, id) => {
    Router.push(`/draw/${id}`);
  };
  let onBuyClick = (e, id) => {
    Router.push(`/products/${id}`);
  };
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


          <Link href="/draw" className={styles.list_style}>
            <li className={styles.list_style}>Draws
            </li>
          </Link>
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
      <div className={styles.banner}>
        <div className={styles.left_side}>
          <h1 className={styles.banner_title}>join online</h1>

          <h1 className={styles.banner_title}>draws <span className={styles.banner_title_pink}>Win Reward</span></h1>
          <p className={styles.banner_subtitle}>We develop effective plans to move your customers behaviour.</p>
          <p className={styles.banner_subtitle}>customer can be alwayes his profit.</p>
          <button className={styles.signup_btn}>Get Started</button>
        </div>
        <div className={styles.right_side}>

          <Carousel>
            <div>
              <img src="/img_1.png" />

            </div>
            <div>
              <img src="/img_2.png" />

            </div>
            <div>
              <img src="/img_1.png" />

            </div>
          </Carousel>


        </div>

      </div>

      <div className={styles.upcoming_draw}>
        <div className={styles.left_side1}>
          <label className={styles.label_main}>upcoming draw</label>
          <p className={styles.second_lable}>04 Aug 2023-06 Aug 2023</p>
        </div>
        <div className={styles.right_side1}>
          <div className={styles.flex_container}>
            <div>0</div>
            <div>6</div>
            <div className={styles.without_box}>:</div>
            <div>2</div>
            <div>8</div>
            <div className={styles.without_box}>:</div>
            <div>1</div>
            <div>9</div>

          </div>
        </div>
      </div>

      <div className={styles.current_draw}>
        <div className={styles.title_layout}>
          <label className={styles.label_main}>
            Current <span className={styles.banner_title_pink}>Draws</span>
          </label>
          <p className={styles.second_lable}>
            Participants buy tickets and lots are drawn to determine the winners.
          </p>

        </div>


        {filteredEvents?.map((event) => {
          return(
          <Carousel>
            <div className={styles.grid_style}>

              <div className={styles.flex_container1}>
                <div className={styles.grid_box}>

                  <img src={event.imageUrl} className={`${styles.grid_banner}`} />


                  <div className={styles.flex_container3}>
                    <div>0</div>
                    <div>6</div>
                    <div className={styles.without_box}>:</div>
                    <div>2</div>
                    <div>8</div>
                    <div className={styles.without_box}>:</div>
                    <div>1</div>
                    <div>9</div>

                  </div>

                  <label className={styles.lable_run}><span className={styles.lable_dhamakka}>{event.eventName}</span>
                  </label>

                  <div className={styles.lable_wrap}>
                    <label className={styles.lable_cash}>Win up to <span className={styles.lable_pink}>$2000 </span>cash & prizes</label>
                  </div>
                  <div lassName={styles.flex_container3}>
                    <img className={styles.img_calnder} src='/calender.png' />
                    <label className={styles.lable_cash}>{new Date(event.startDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric'})}-{new Date(event.endDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric'})}</label>
                  </div>

                  <div className={styles.button_wrap}>

                    <button className={styles.button_view} onClick={(e) => {
                        onViewDetailsClick(e, event.id);
                      }}>View Details</button>
                    <button className={styles.button_buynow} onClick={(e)=>{
                      onBuyClick(e,event.id);
                    }}>Buy now</button>

                  </div>
                </div>

{/* 
                <div className={styles.grid_box}>
                  <img src='/2.png' className={styles.grid_banner} />

                  <div className={styles.flex_container3}>
                    <div>0</div>
                    <div>6</div>
                    <div className={styles.without_box}>:</div>
                    <div>2</div>
                    <div>8</div>
                    <div className={styles.without_box}>:</div>
                    <div>1</div>
                    <div>9</div>

                  </div>

                  <label className={styles.lable_run}> RUN 4 <span className={styles.lable_dhamakka}>Dhamaka</span>
                  </label>

                  <div className={styles.lable_wrap}>
                    <label className={styles.lable_cash}>Win up to <span className={styles.lable_pink}>₹2000 </span>cash& prizes</label>
                  </div>
                  <div lassName={styles.flex_container3}>
                    <img className={styles.img_calnder} src='/calender.png' />
                    <label className={styles.lable_cash}>04 Aug 2023-06 Aug 2023</label>
                  </div>

                  <div className={styles.button_wrap}>

                    <button className={styles.button_view}>View Details</button>
                    <button className={styles.button_buynow}>Buy now</button>

                  </div>
                </div> */}


                {/* <div className={styles.grid_box}>
                  <img src='/3.png' className={styles.grid_banner} />
                  <div className={styles.flex_container3}>
                    <div>0</div>
                    <div>6</div>
                    <div className={styles.without_box}>:</div>
                    <div>2</div>
                    <div>8</div>
                    <div className={styles.without_box}>:</div>
                    <div>1</div>
                    <div>9</div>

                  </div>

                  <label className={styles.lable_run}> RUN 4 <span className={styles.lable_dhamakka}>Dhamaka</span>
                  </label>

                  <div className={styles.lable_wrap}>
                    <label className={styles.lable_cash}>Win up to <span className={styles.lable_pink}>₹2000 </span>cash& prizes</label>
                  </div>
                  <div lassName={styles.flex_container3}>
                    <img className={styles.img_calnder} src='/calender.png' />
                    <label className={styles.lable_cash}>04 Aug 2023-06 Aug 2023</label>
                  </div>

                  <div className={styles.button_wrap}>

                    <button className={styles.button_view}>View Details</button>
                    <button className={styles.button_buynow}>Buy now</button>

                  </div>
                </div> */}

              </div>

            </div>


            {/* <div className={styles.grid_style}>

              <div className={styles.flex_container1}>
                <div className={styles.grid_box}>

                  <img src='/1.png' className={`${styles.grid_banner}`} />


                  <div className={styles.flex_container3}>
                    <div>0</div>
                    <div>6</div>
                    <div className={styles.without_box}>:</div>
                    <div>2</div>
                    <div>8</div>
                    <div className={styles.without_box}>:</div>
                    <div>1</div>
                    <div>9</div>

                  </div>

                  <label className={styles.lable_run}> RUN 4 <span className={styles.lable_dhamakka}>Dhamaka</span>
                  </label>

                  <div className={styles.lable_wrap}>
                    <label className={styles.lable_cash}>Win up to <span className={styles.lable_pink}>$2000 </span>cash& prizes</label>
                  </div>
                  <div lassName={styles.flex_container3}>
                    <img className={styles.img_calnder} src='/calender.png' />
                    <label className={styles.lable_cash}>04 Aug 2023-06 Aug 2023</label>
                  </div>

                  <div className={styles.button_wrap}>

                    <button className={styles.button_view}>View Details</button>
                    <button className={styles.button_buynow}>Buy now</button>

                  </div>
                </div>


                <div className={styles.grid_box}>
                  <img src='/2.png' className={styles.grid_banner} />

                  <div className={styles.flex_container3}>
                    <div>0</div>
                    <div>6</div>
                    <div className={styles.without_box}>:</div>
                    <div>2</div>
                    <div>8</div>
                    <div className={styles.without_box}>:</div>
                    <div>1</div>
                    <div>9</div>

                  </div>

                  <label className={styles.lable_run}> RUN 4 <span className={styles.lable_dhamakka}>Dhamaka</span>
                  </label>

                  <div className={styles.lable_wrap}>
                    <label className={styles.lable_cash}>Win up to <span className={styles.lable_pink}>$2000 </span>cash& prizes</label>
                  </div>
                  <div lassName={styles.flex_container3}>
                    <img className={styles.img_calnder} src='/calender.png' />
                    <label className={styles.lable_cash}>04 Aug 2023-06 Aug 2023</label>
                  </div>

                  <div className={styles.button_wrap}>

                    <button className={styles.button_view}>View Details</button>
                    <button className={styles.button_buynow}>Buy now</button>

                  </div>
                </div>


                <div className={styles.grid_box}>
                  <img src='/3.png' className={styles.grid_banner} />
                  <div className={styles.flex_container3}>
                    <div>0</div>
                    <div>6</div>
                    <div className={styles.without_box}>:</div>
                    <div>2</div>
                    <div>8</div>
                    <div className={styles.without_box}>:</div>
                    <div>1</div>
                    <div>9</div>

                  </div>

                  <label className={styles.lable_run}> RUN 4 <span className={styles.lable_dhamakka}>Dhamaka</span>
                  </label>

                  <div className={styles.lable_wrap}>
                    <label className={styles.lable_cash}>Win up to <span className={styles.lable_pink}>$2000 </span>cash& prizes</label>
                  </div>
                  <div lassName={styles.flex_container3}>
                    <img className={styles.img_calnder} src='/calender.png' />
                    <label className={styles.lable_cash}>04 Aug 2023-06 Aug 2023</label>
                  </div>

                  <div className={styles.button_wrap}>

                    <button className={styles.button_view}>View Details</button>
                    <button className={styles.button_buynow}>Buy now</button>

                  </div>
                </div>

              </div>

            </div> */}
          </Carousel>
        )
        })}



        {/* <div className={styles.box_wrap}>

          <div className={styles.win_box}>
            It’s your chance to <span className={styles.banner_title_pink}>  win!</span>
          </div>
        </div> */}

        <div className={styles.play_wrap}>
          <div className={styles.title_layout1}>
            <label className={styles.label_main}>
              How to  <span className={styles.banner_title_pink}>Play</span>
            </label>
            <p className={styles.second_lable}>
              Pass through these 3 easy steps.
            </p>

            <img className={styles.play_img} src='/play.png' />

          </div>
        </div>


        <div className={styles.table_bg}>

          <div className={styles.title_layout1}>
            <label className={styles.label_main}>
              Winners  <span className={styles.banner_title_pink}>History</span>
            </label>
            <p className={styles.second_lable}>
              Here is the list of previous winners
            </p>
            <p className={styles.second_lable1}>
              Note : Only winners from the last 3 months are listed
            </p>




            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <th key={index}>Table heading</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>

           
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
    </div>





  );


}
