import React from 'react';
import "./customer.css"
const Customer = (props) => {

    return (
      <div>
        <img src={props.src} className="move-from-right"/>
      </div>
    )
  }
  export default Customer;