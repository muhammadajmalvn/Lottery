import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css';
import Modal from 'react-bootstrap/Modal';

export default function AddressModalPopup(props) {

  const [addressData, setAddressData] = useState({
    id: null,
    fullName: "",
    email: "",
    city: "",
    mobileNumber: "",
    street: "",
    pinCode: "",
    isDefault: false,
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setAddressData({
      ...addressData,
      [name]: value
    });
  };

  const handleCheckboxChange = () => {
    setAddressData({
      ...addressData,
      isDefault: !addressData.isDefault,
    });
  };

  const handleFormSubmit = () => {
    // Call the onSubmit function passed via props and pass the addressData
    props.onSubmit(addressData);
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
    // Close the modal
    props.onHide();
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };


  useEffect(() => {
    // Set initial values when editing
    if (props.addressDetails) {
      setAddressData(props.addressDetails);
    } else {
      // If adding a new address, reset the form
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
    }
  }, [props.addressDetails]);

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
          <h4 className={styles.header_title}>{props.addressDetails.id ? <>Edit</> : <>Add a New</>} <span className={styles.banner_title_pink}>Address</span></h4>
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>

        <div className={styles.modal_wrapper}>

          <div className={styles.popup_img_wrap1}>

            <div className={styles.popup_img_wrap1_field}>

              <input className={styles.popup_img_wrap1_field_input} type="text" id="fullname" name="fullName" placeholder="Full Name" onChange={handleInputChange} value={addressData.fullName} />
            </div>
            <div className={styles.popup_img_wrap1_field}>

              <input className={styles.popup_img_wrap1_field_input} type="email" id="email" name="email" placeholder="Email" onChange={handleInputChange} value={addressData.email} />
            </div>
            <div className={styles.popup_img_wrap1_field}>

              <input className={styles.popup_img_wrap1_field_input} type="text" name="city" placeholder="City" onChange={handleInputChange} value={addressData.city} />
            </div>
            <div className={styles.checkbox_wrapper}>
              <input className={styles.checkbox_wrap1} type="checkbox" id="isDefault" name="isDefault" value="" checked={addressData.isDefault} onChange={handleCheckboxChange} />
              <label htmlFor="isDefault">Use as my default shipping address</label>
            </div>
            <input type="submit"
              value="Submit"
              className={styles.signup_btn}
              onClick={handleFormSubmit} />

          </div>

          <div className={styles.popup_img_wrap1}>

            <div className={styles.popup_img_wrap1_field}>

              <input className={styles.popup_img_wrap1_field_input} type="phone" id="fname" name="mobileNumber" placeholder="Mobile Number" onChange={handleInputChange} value={addressData.mobileNumber} />
            </div>
            <div className={styles.popup_img_wrap1_field}>

              <input className={styles.popup_img_wrap1_field_input} type="text" id="lname" name="street" placeholder="House number, street etc,*" onChange={handleInputChange} value={addressData.street} />
            </div>
            <div className={styles.popup_img_wrap1_field}>

              <input className={styles.popup_img_wrap1_field_input} type="text" id="pincode" name="pinCode" placeholder="Pin code*" onChange={handleInputChange} value={addressData.pinCode} />
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




