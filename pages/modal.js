import React from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css';
import Modal from 'react-bootstrap/Modal';

    export default function  ModalPopup(props) { 
   
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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4 className={styles.header_title}>Selected tickets are <span className={styles.banner_title_pink}>saved!</span></h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={styles.popup_img_wrap}>
        <img src='/ticket_popup.png' className={styles.popup_immg} />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>

          <div className={styles.calendar_btn_wrap}>

<button className={styles.calendar_btn}>View tickets</button>

<button className={styles.ok_btn}>Ok</button>


</div>
        </Modal.Footer>
      </Modal>
          );
    }

   


