import React from 'react'
import SC from "./stageclear.png"
import { useNavigate } from 'react-router-dom';
const Clear = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/stage2/round1'); // ボタンがクリックされたときに/stage1にナビゲート
      };
  return (
    <div>
        <img src={SC} className="sc"/>
        <button onClick={handleClick}>
          スタート
        </button>
    </div>
  )
}

export default Clear