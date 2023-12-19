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
          <h4 className={styles.header_title}>Personal  <span className={styles.banner_title_pink}>informations</span></h4>
          </Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
        <div className={styles.popup_img_wrap1}>
      
<div className={styles.popup_img_wrap1_field}>
        <label className={styles.popup_img_wrap1_field_label} for="fname">First name:</label>
  <input className={styles.popup_img_wrap1_field_input}  type="text" id="fname" name="fname" placeholder="John"/>
  </div>
  <div className={styles.popup_img_wrap1_field}>
  <label className={styles.popup_img_wrap1_field_label} for="lname">Phone Number:</label>
  <input className={styles.popup_img_wrap1_field_input} type="text" id="lname" name="lname" placeholder="+91"/>
  </div>
  <div className={styles.popup_img_wrap1_field}>
  <label className={styles.popup_img_wrap1_field_label} for="lname">Email ID:</label>
  <input className={styles.popup_img_wrap1_field_input} type="text" id="lname" name="lname" placeholder="demo@gmail.com"/>
  </div>
  <div className={styles.popup_img_wrap1_field}>
  <label className={styles.popup_img_wrap1_field_label} for="lname">Address:</label>
  <input className={styles.popup_img_wrap1_field_input} type="text" id="lname" name="lname" placeholder="address"/>
  </div>
  <input type="submit" value="Submit" className={styles.signup_btn} onClick={props.onHide}/>

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

   


