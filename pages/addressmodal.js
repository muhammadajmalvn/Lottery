import React from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css';
import Modal from 'react-bootstrap/Modal';

    export default function  AddressModalPopup(props) { 
   
        const handleCloseClick = (e) => {
            e.preventDefault();
            onClose();
        };
      
      return (
        <Modal className={styles.modal_bg}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Button onClick={props.onHide} className={styles.header_close}>X</Button>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4 className={styles.header_title}>Add a New <span className={styles.banner_title_pink}>Address</span></h4>
          </Modal.Title>
        
        </Modal.Header>
        <Modal.Body>

          <div className={styles.modal_wrapper}>

          <div className={styles.popup_img_wrap1}>
      
      <div className={styles.popup_img_wrap1_field}>

        <input className={styles.popup_img_wrap1_field_input}  type="text" id="fname" name="fname" placeholder="Full Name:"/>
        </div>
        <div className={styles.popup_img_wrap1_field}>

        <input className={styles.popup_img_wrap1_field_input} type="text" id="lname" name="lname" placeholder="Email"/>
        </div>
        <div className={styles.popup_img_wrap1_field}>

        <input className={styles.popup_img_wrap1_field_input} type="text" id="lname" name="lname" placeholder="City"/>
        </div>
        <div className={styles.checkbox_wrapper}>
        <input className={styles.checkbox_wrap1} type="checkbox" id="vehicle1" name="vehicle1" value="" />
        <label>Use as my default shipping address</label>
        </div>
        <input type="submit" value="Submit" className={styles.signup_btn} onClick={props.onHide}/>
      
              </div>

              <div className={styles.popup_img_wrap1}>
      
      <div className={styles.popup_img_wrap1_field}>

        <input className={styles.popup_img_wrap1_field_input}  type="text" id="fname" name="fname" placeholder="Mobile Number:"/>
        </div>
        <div className={styles.popup_img_wrap1_field}>

        <input className={styles.popup_img_wrap1_field_input} type="text" id="lname" name="lname" placeholder="House number, street etc,*"/>
        </div>
        <div className={styles.popup_img_wrap1_field}>
       
        <input className={styles.popup_img_wrap1_field_input} type="text" id="lname" name="lname" placeholder="Pin code*"/>
        </div>
      
              </div>

          </div>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>

          <div className={styles.calendar_btn_wrap}>




</div>
        </Modal.Footer> */}
      </Modal>
          );
    }

   


