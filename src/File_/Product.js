import React, { useEffect } from 'react';
import Menubar from './Menubar';
import {Pro} from "../data_/pro"
import { useState} from 'react';
import { Link } from 'react-router-dom';
import Copyright from '../Copyright/Copyright';

const Product = () => {
  const [Fill, setFill] = useState(Pro);
  const [k1,k2]=useState(false)
  function jj(j1){
    k2(j1)
  }
  
  function handleItemClick(e) {
    const itemName = e.target.innerHTML.trim();

    if(itemName==="Show All"){
      setFill(Pro)
    }else if (itemName==="Asus"){
      const kk=Pro.filter(p => p.name ==="Asus");
        setFill(kk)
    }else if(itemName=="Hp"){
      const kk=Pro.filter(p => p.name ==="Hp");
        setFill(kk)
    }else if(itemName ==="Acer"){
      const kk=Pro.filter(p => p.name ==="Acer");
      setFill(kk)
    }
    else if(itemName ==="Dell"){
      const kk=Pro.filter(p => p.name ==="Dell");
      setFill(kk)
    }else if(itemName==="Macbook"){
      const kk=Pro.filter(p => p.name ==="Macbook");
      setFill(kk)
    }

    }


  const Fil=Fill.map((p)=>(
    <div className='pro-item2' >
    <Link to={p.id.toString()}>
    <div key={p.id} className='pro-item ' style={{boxShadow:k1?"0 0 10px white":""}}>
    <h1 style={{color:k1?"white":""}}>{p.name}</h1> 
    <img className='pro-img' src={p.img} />
    </div>
  </Link></div>))
  
  return (
    <>
      <Menubar onModeChange={jj} />
      <div className='pro-main' style={{backgroundColor:k1? "gray" :"white"}}>
        <h1>Hello</h1>
        <nav>
          <ul className='pro-ul' onClick={handleItemClick}>
            <li style={{backgroundColor:k1? "":"gray",color:k1?"":"white"}}>Show All</li>
            <li style={{backgroundColor:k1? "":"gray",color:k1?"":"white"}}>Macbook</li>
            <li style={{backgroundColor:k1? "":"gray",color:k1?"":"white"}}>Hp</li>
            <li style={{backgroundColor:k1? "":"gray",color:k1?"":"white"}}>Asus</li>
            <li style={{backgroundColor:k1? "":"gray",color:k1?"":"white"}}>Dell</li>
            <li style={{backgroundColor:k1? "":"gray",color:k1?"":"white"}}>Acer</li>
          </ul>
        </nav>

        <div className='pro-show'>
        {Fil}
        </div>
      </div>
       <Copyright/>
    </>
  );
}

export default Product;
