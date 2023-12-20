import React from 'react'
import SC from "./stageclear.png"
import { useNavigate } from 'react-router-dom';
const Clear = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(props.root); // ボタンがクリックされたときに/stage1にナビゲート
      };
  return (
    <div>
        <img src={SC} className="sc" style={{ width: '50%' }}/>
        <button onClick={handleClick}>
          次のステージへ
        </button>
    </div>
  )
}

export default Clear