import React,{ useState,useEffect }  from 'react'
import './Ending.css';

const Ending = () => {
  const [pointsData, setPointsData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:2000/get_points');
            const data = await response.json();
            /*const storedName = sessionStorage.getItem('name');*/
            /*if (storedName) {
              setUserName(storedName);
            }*/
            
            if (response.ok) {
              data.sort((a, b) => {
                //  return (a.id < b.id) ? -1 : 1;  //オブジェクトの昇順ソート
                  return (a.value > b.value) ? -1 : 1;  //オブジェクトの降順ソート
               });

                 setPointsData(data.slice(0, 5));
                
              console.log('Points:', data);
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
    <>
    <div className="ending-header">ランキング</div>
    <div className="ending-container">
        {pointsData.map((point, index) => (
              <div key={point.id} className={`ending-item`}>{`${index + 1}位: ${point.name} ${point.value}点`}</div>
            ))} 

    </div>
    </>
  )
}

export default Ending