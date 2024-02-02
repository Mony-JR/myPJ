import React, { useEffect, useRef,useState } from 'react';
import Me_bar from './Me_bar';
import './Me_style.css';
import Me_pro from './Me_pro';
import { GoMoveToTop } from "react-icons/go";
import Me_main from './Me_main';
import Copyright from '../Copyright/Copyright';
import Typewriter from "typewriter-effect";
import down from "../Down/test.txt"

const ME_Home = () => {
  const Me = useRef(null);
  const Se = useRef(null);
  const home = useRef(null)
  const [typedText, setTypedText] = useState('');
  const [typinG ,SettypinG]=useState('')

  const handleItemClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  
  

  return (
    <>
      <div ref={home}>
        <span style={{ fontSize: '3rem', position: 'fixed', right: '10px', bottom: '20px' }}
          onClick={() => handleItemClick(home)} ><GoMoveToTop /> </span>
        <Me_bar handleItemClick={() => handleItemClick(Me)} hand1={() => handleItemClick(Se)} />

      </div>
      <div>
        
        <div className='me_body'>
          <h1>
            Hello I am Mony JR
          <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("of Developer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("of Developer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("of Developer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("of Developer")
                        .start();
                        
                        
                }}
            />
          </h1>
          

          <p>I am a  programmer and web developer,<br/>
            I having knowledge Web Developer.<br/>
            I learning on RUPP.<br/>
            I having knowledge of security and privacy.<br/>
            I want to tell the web developer,<br/>
            I am owner learning and Research on internet.</p>
            <hr className='hr' style={{height:'100%'}}/>
          <p> + 2022 to present, I am a Student of the College<br></br>
            I will learn more about web skill,
            programmer skill and mobile app development
            Responsibilities:<br></br>
            •	I can building website a very good<br></br>
            •	I can knowledge about framework on web<br></br>
            •	I knowledge about Concept Programing<br></br>
            •	I knowledge about sql server<br/>

          </p>
          <a  href={down} download="Mony JR Developer CV "
        target="_blank"
        rel="noreferrer" ><button className='cv-down'> Download My CV</button></a>
          
        </div>
        <hr></hr>
        
      </div>
      <div ref={Me} className='me_pro'>
        <Me_pro />
      </div>
      <div ref={Se} className='me_pro'>
        <Me_main />
      </div>
      <Copyright />
    </>
  );
};

export default ME_Home;