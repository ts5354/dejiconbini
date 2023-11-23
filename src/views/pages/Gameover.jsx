import React from 'react'
import  GameOver from "./gameover.png"
import AW from "./angry_woman.png"
import "./Gameover.css"
const Gameover = (props) => {
  return (
    <div>
        <img src={GameOver} className="go"/>
        <img src={AW} className="AW"/>
        <div className="angry">{props.angry}</div>
    </div>
  )
}

export default Gameover