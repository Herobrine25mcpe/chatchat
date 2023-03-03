import React from 'react'
import Img from "../img/img.png"
import Attach from "../img/attach.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="type" placeholder='Type here...' name="" id="" />
      <div className="send">
        <img src={Img} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input