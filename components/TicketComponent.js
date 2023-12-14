import React, { useState } from 'react';
import styles from '../styles/Home.module.css'; // Import your CSS module
import { get } from '../libraries/httpService';

const TicketComponent = ({index, onSelectNumber, onTicketSubmit,eventId}) => {
  const [selectedNumbers, setSelectedNumbers] = useState(Array(5).fill(null));
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedNumberCount, setSelectedNumberCount] = useState(0);

  const handleNumberClick = (number, index,idx) => {
    if (selectedNumberCount < 5 && !selectedNumbers[index]) {
      const newSelectedNumbers = [...selectedNumbers];
      newSelectedNumbers[index] = number;
      setSelectedNumbers(newSelectedNumbers);
      const formattedNumber = number.toString().padStart(2, '0');

      // Update the state
      setSelectedNumberCount(selectedNumberCount + 1);
      // Call the onSelectNumber function from the parent component
      onSelectNumber(index, selectedNumber + formattedNumber);
    }
    if (selectedNumberCount === 5) {
        const ticketString = selectedNumbers.map((num) => formatNumber(num)).join('');
        onTicketSubmit(idx, ticketString); // Pass the 10-digit string to the main component
      }
  };

  const handleClearAll = () => {
    setSelectedNumbers(Array(5).fill(null));
    setSelectedNumberCount(0)
      // Generate an empty ticket string
  const emptyTicketString = Array(5).fill('').join('');

  // Call the onTicketSubmit function with the empty ticket string for the current index
  onTicketSubmit(index, emptyTicketString);
  };
  const handleAutoSelect=async()=>{
    const {data} = await get('tickets/autoselect/1')
    const autoSelectedNumbers = data.toString().match(/.{2}/g).map(Number);

    // Update the state with auto-selected numbers
    setSelectedNumbers(autoSelectedNumbers);

    // Format the auto-selected numbers for display
    const formattedNumbers = autoSelectedNumbers.map(formatNumber).join('');
    setSelectedNumberCount(5)
    onSelectNumber(index, formattedNumbers);

    const ticketString = selectedNumbers.map((num) => formatNumber(num)).join('');
    onTicketSubmit(index, ticketString); 
  }

  const formatNumber = (number) => {
    return number !== null ? (number < 10 ? `0${number}` : `${number}`) : '';
  };

  return (
    <div className={styles.calendar_wrap}>
      <div className={styles.calendar_title_wrap}>
        <div>
          <label className={styles.calendar_label}>Ticket {index+1}</label>
        </div>
        <div className={styles.circle1}>
          {selectedNumbers.map((selectedNumber, index) => (
            <div key={index} className={styles.circle}>
              {formatNumber(selectedNumber)}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.calendar}>
        <div className={styles.clear_all_wrap}>
          <label className={styles.yellow_label}>Pick any 05 numbers</label>
          <div className={styles.clear_all_btn_wrap}>
            <button className={styles.auto_select_btn} onClick={handleAutoSelect}>
              Auto Select
              <img src="/refresh-ccw.png" className={styles.refresh} alt="Refresh" />
            </button>
            <button className={styles.auto_select_btn} onClick={handleClearAll}>
              Clear All
              <img src="/trash-2.png" className={styles.refresh} alt="Trash" />
            </button>
          </div>
        </div>
        <div className={styles.purple_bg}>
          {Array.from({ length: 5 }, (_, rowIndex) => (
            <div key={rowIndex} className={styles.circle1}>
              {Array.from({ length: 10 }, (_, colIndex) => {
                const number = rowIndex * 10 + colIndex;
                return (
                  <div
                    key={colIndex}
                    className={styles.circle}
                    onClick={() => handleNumberClick(number, selectedNumbers.indexOf(null),index)}
                  >
                    {formatNumber(number)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
