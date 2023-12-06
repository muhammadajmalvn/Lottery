import React from "react";
import ReactDOM from "react-dom";
import styles from '../styles/Home.module.css';


    export default function  Modal({onClose, children, title}) { 
   
        const handleCloseClick = (e) => {
            e.preventDefault();
            onClose();
        };
      
      return (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
          );
    }
    // return ReactDOM.createPortal(
    //     modalContent,
    //     document.getElementById("modal-root")
   


