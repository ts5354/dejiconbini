import React from 'react'
import {useState} from "react"
import "./fukidashi.css"

const Fukidashi = (props) => {
    

    const handleClick = () => {
        props.onButtonClick();
        props.makeVisible(); // 親コンポーネントから渡された関数を呼び出す
      };
      
    return (
        <div class="rounded-rectangle">
            {props.value}
            <button onClick={()=>{handleClick();}}  disabled={props.isDisabled}>回答に進む</button>
        </div>
        
    )
}

export default Fukidashi