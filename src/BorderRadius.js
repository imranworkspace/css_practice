import React from 'react'
import './mycss/border_radius.css'
const BorderRadius = () => {
  return (
    <>
    <div id='div1'>
        <p>border-top-left-radius: 10px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 10px;</p>
    </div>
    <hr></hr>
    <div id='div2'>
        <p>border-radius: 10px 20px 30px 40px; </p>
    </div>
    <hr></hr>
    <div id='div3'>
        <p>border-radius: 10px 20px 10px;</p>
    </div>
    <hr></hr>
    <div id='div4'>
        <p>border-radius: 10px 20px;</p>
    </div>
    <hr></hr>
    <div id='div5'>
        <p>border-radius: 10px;</p>
    </div>
    </>
        
  )
}

export default BorderRadius