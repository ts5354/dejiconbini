import React,{ useState,useEffect } from 'react'
import "./select_pop2.css"
const SelectPop2 = (props) => {
  const [userName, setUserName] = useState('');
  const userId = sessionStorage.getItem('userId');
  const BadAnswer = async ()=>{
    props.onPop1Click();
    try {
      const response = await fetch('http://localhost:2000/decrement_point', {
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
        const response = await fetch('http://localhost:2000/increment_point', {
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
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:2000/get_points');
          const data = await response.json();
          if (response.ok) {
            console.log('Points:', data.points);
          } else {
            console.error('Error fetching points:', data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
        const storedName = sessionStorage.getItem('name');
    if (storedName) {
      setUserName(storedName);
    }
      };
    
      fetchData();
    }, []);
  return (
    <div>
    <div className='popup11' onClick={BadAnswer} style={{ visibility: props.vis }} >{props.pop11}</div>
    <div className='popup22' onClick={handlePopup2Click} style={{ visibility: props.vis}}>{props.pop22}</div>
    </div>
  )
}

export default SelectPop2
