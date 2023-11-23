import React from 'react'
import  OPP from "./opening.png"
import { useNavigate } from 'react-router-dom';
const Opening = () => {
  const navigate = useNavigate(); // useNavigateフックを使用してnavigate関数を取得

  const handleClick = () => {
    navigate('/stage1/round1'); // ボタンがクリックされたときに/stage1にナビゲート
  };
  return (
    <div>
        <img src={OPP} style={{ width: '30%' }}/>
        <button onClick={handleClick}>
          スタート
        </button>
    </div>
  )
}

export default Opening