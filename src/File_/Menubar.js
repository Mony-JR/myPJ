// Menubar.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img_/logo IT.png';
import { FaUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { RiMenuSearchFill } from "react-icons/ri";


const Menubar = ({ onModeChange }) => {
  const [dark, setDark] = useState(false);
  const [to,to1]=useState(true)

  function handleModeClick() {
    // Notify the parent component about the mode change
    setDark(!dark);
    onModeChange(!dark); 
  }
  const Toggle=()=>{
    to1(!to)
  }

  return (
    <div >
      <nav className='Bar' style={{background:dark ? "gray":"",boxShadow:dark?"0 0 10px #cfcfcf":""}}>
        <div onClick={Toggle}>
          <Link>
            <img className='logo' src={logo} alt='Logo' />
          </Link>
        </div>

        <ul className={ to ?'ul': 'ul ul_1'} style={{backgroundColor:dark? 'rgba(0, 0, 0, 0.714)' :' rgba(248, 248, 248, 0.714)'}}>
          <li>
            <Link style={{color:dark?"white":""}} to='/'>Home</Link>
          </li>
          <li>
            <Link style={{color:dark?"white":""}} to='/product'>Product</Link>
          </li>
          <li>
            <Link style={{color:dark?"white":""}} >Service</Link>
          </li>
          <li>
            <Link style={{color:dark?"white":""}} to='/about'>About</Link>
          </li>
        </ul>
        <div onClick={Toggle} className={to? "active":'noAT'}>

        </div>

        <div className='acc'>
          <div className='search'>
            <input title='Search' />
            <button className='btn-search'>
              <CiSearch />
            </button>
          </div>
          <span onClick={handleModeClick}>{dark ? <MdDarkMode /> :<CiDark /> }</span>
          <Link to='/Login'>
            <span>
              <FaUser />
            </span>
          </Link>
          <Link to='/Login'>
          <span>
            <FaShoppingCart />
          </span>
          </Link>
          
        </div>
      </nav>
    </div>
  );
};


export default Menubar;
