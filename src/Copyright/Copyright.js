import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";

import './copy.css'

const Copyright = () => {
  return (
    <div className='copy'>
      <div className='copy_contact'>
        <h2>Contect Me</h2>
        <p><span><FaPhone /></span>  +855 787 310 99</p>
        <p><span><FaPhone /></span> +855 869 384 57</p>
        <p><span><AiOutlineMail /></span> rornmony009988@gmail.com</p>
      </div>
      <div>
        <h3> <span><FaRegCopyright /></span>Copyright on 2024</h3>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Copyright
