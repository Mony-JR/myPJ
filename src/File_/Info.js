import React, { useState } from 'react';
import { Pro } from '../data_/pro';
import { useParams } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import Menubar from './Menubar';
const Info = () => {
  const { id } = useParams();
  const product = Pro.find((p) => p.id === parseInt(id));
  const { name, img, cpu, img2, img3, img4,dis,price } = product;

  const [s1, setS1] = useState(0);
  const [k1,k2]=useState(false)
  function jj(j1){
    k2(j1)
  }

  function back() {
    const next=(s1 -1+all_img.length )%all_img.length
    setS1(next)
  }
  const all_img=[img,img2,img3,img4]
  const showNextImage = () => {
    const next=(s1 +1 )%all_img.length
    setS1(next)
  };


  return (
    <>
    <Menubar onModeChange={jj}/>
    <div className="info">
      <div className="info-mini"> 
        <h1>{"Brand: " + name}</h1>
        <span onClick={back} className="back">
          <IoIosArrowBack />
        </span>
        <div className="box-img">
          <img src={all_img[s1]} />
        </div>
        <span onClick={showNextImage} className="next">
          <MdNavigateNext />
        </span>
        <div className='price'>
          <label></label>
          <h1> {price+" $"}</h1>
        </div>
        <h1>{"Cpu: " + cpu}</h1>
        <h2>Diskplay :{dis} </h2>
      </div>
      <div style={{width:'100%',height:'200px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>

      </div>
    </div>
    </>
  );
};

export default Info;
