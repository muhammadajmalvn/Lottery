import React from 'react';
import styles from '../styles/Home.module.css';

const TicketDisplay = ({ ticketNumber }) => {
  // Convert the 10-digit string into an array of two-digit substrings
  const ticketArray = ticketNumber?.match(/.{1,2}/g) || [];
  return (
    <div className={styles.number_set}>
      {ticketArray?.map((twoDigits, index) => (
        <label key={index} className={styles.number}>
          {twoDigits}
        </label>
      ))}
    </div>
  );
};

export default TicketDisplay;
