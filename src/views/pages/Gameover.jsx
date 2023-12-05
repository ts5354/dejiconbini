import React from 'react'
import  GameOver from "./gameover.png"
import AW from "./angry_woman.png"
import { useNavigate } from 'react-router-dom';
import "./Gameover.css"
const Gameover = (props) => {
  const navigate = useNavigate();
  const Redirect = () => {
    navigate(props.root); // ボタンがクリックされたときに/stage1にナビゲート
  };
  const imgStyle = { width: '30%' };
  return (
    <div>
        <img src={GameOver} className="go"/>
        <img src={props.AngryPerson} className="AW"/>
        <div className="angry">{props.angry}</div>
        <button onClick={Redirect}>
          やり直す
        </button>
    </div>
  )
}

export default Gameover