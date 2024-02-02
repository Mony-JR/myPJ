
import React, { useEffect, useRef, useState } from 'react';
import '../File_/style.css';
import Product from './Product';
import { Link } from 'react-router-dom';
import img from '../img_/shop-1.png';
import Menubar from './Menubar';
import Copyright from '../Copyright/Copyright';
import Typewriter from "typewriter-effect";

  
  const imG=[
    {pic:'https://i.pinimg.com/originals/5d/25/4e/5d254e3ab6c2dc067c4e901581abc59a.jpg'},
    {pic:'https://img.freepik.com/premium-vector/electronics-store-sale-promotion-vector-flat-illustration_103044-4061.jpg'},
    {pic:'https://st2.depositphotos.com/7341970/10438/v/950/depositphotos_104389866-stock-illustration-electronics-store-banner.jpg'}
]

  

const Home = () => {
  const [dark, setDark] = useState(false);
  const fc=useRef(null)
  function handleModeChange(newMode) {
    setDark(newMode);
  }
  const [picter,setpic]=useState([imG])
  
  const img_runing=imG.map((p,index)=>(
    <img className='IMG' key={index} src={p.pic}  />
  ))
  

  return (
    <div className='main' style={{ backgroundColor: dark ? 'gray' : 'white' }}>
      <Menubar onModeChange={handleModeChange} />

      <div className='home-contener'>
        <div className='txt-main'>
          <a className='txt-link'>
            <Link style={{color:'yellow'}} to='/about' >Show more</Link>
          </a>

          <h1 style={{color:'white'}}>New Product</h1>
          <h1 style={{color:'white'}}>Please Buy Soon</h1>
          <li style={{color:'white'}}>Order Now</li>
          <h2 style={{color:'white'}}>Hello
          <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("I am Mony JR")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("I am web Developer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("Wellcome My Project Tester")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("Wellcome to My Project Tester")
                        .typeString("I am Mony JR")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("I am web Developer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("Wellcome My Project Tester")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("Wellcome to My Project Tester")
                        .start();
                        
                        
                }}
            />
          </h2>
        </div>
        <div className='img-main'>
          {img_runing}
        </div>
      </div>
      <Copyright/>
    </div>
  );
};

export default Home;
