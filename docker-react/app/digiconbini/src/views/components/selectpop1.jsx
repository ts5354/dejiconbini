import React, { useState,useEffect } from 'react';
import "./select_pop1.css";

const SelectPop1 = (props) => {
  const [userName, setUserName] = useState('');
  const userId = sessionStorage.getItem('userId');
  // Handler for popup2 click
  const BadAnswer = async ()=>{
    props.onPop1Click();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/decrement_point`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: userId })
    });
    const data = await response.json();
    console.log('Points updated:', data);
    } catch (error) {
      console.error('Error updating points:', error);
    }

  }
  const handlePopup2Click = async () => {
    props.trueAnswer();
    props.returnAnswer();
    props.stage1Round();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/increment_point`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: userId })
      });
      const data = await response.json();
      console.log('Points updated:', data);
    } catch (error) {
      console.error('Error updating points:', error);
    }
  };

  // Fetching points data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_points`);
        const data = await response.json();
        const storedName = sessionStorage.getItem('name');
        if (storedName) {
          setUserName(storedName);
        }
        if (response.ok) {
          console.log('Points:', data.points);
        } else {
          console.error('Error fetching points:', data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <div className='popup1' onClick={BadAnswer} style={{ visibility: props.vis }} >{props.pop1}</div>
      <div className='popup2' onClick={handlePopup2Click} style={{ visibility: props.vis }}>{props.pop2}</div>
    </div>
  );
}

export default SelectPop1;
