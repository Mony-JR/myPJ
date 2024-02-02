import React, { useState } from 'react'
import Menubar from './Menubar'
import "./style.css"


const Login = () => {

    const [up ,setup]=useState(false)

    const Set=()=>{
        setup(!up)
    }
    const [dark, setDark] = useState(false);

  function handleModeChange(newMode) {
    setDark(newMode);
  }
    
    
  return (

    <div style={{width:'100%',overflow:'hidden'}}> 

      <Menubar onModeChange={handleModeChange} />
    
    <div className='login-main' style={{ backgroundImage: dark ? 'linear-gradient(white,black,green)' : 'linear-gradient(red,blue,rgb(0, 255, 4))' }} >
        <div className='inbox'></div>
        <div className='inbox in2'></div>
        <div className='inbox in3'></div>
        <div style={{ display:up? "none" :"flex"}} className='box-input'>
            <div className='input' >
        <input type='email'  />
        <label>Email</label>
      </div>
      <div className='input'>
        <input type='password' />
        <label>Password</label>
      </div>
      <div className='sigup'>
        <button style={{padding:'10px',width:'100px'}}>Login</button>
      <span>if not having acc <button onClick={Set}>Sigup</button></span>
      
      </div>
        </div>

        <div style={{display:up ? "flex":"none"}} className='box-sigup'>
        <div className='input'>
        <input />
        <label>Username</label>
      </div>
        <div className='input'>
        <input />
        <label>Password</label>
      </div>
      <div className='input'>
        <input />
        <label>Confirm PW</label>
      </div>
      <div className='sigup'>
        <button>Sigup</button>
      <span>if having acc <button onClick={Set}>Login</button></span>
      
      </div>
        </div>

      <h1 style={{display:up ? "none": "block",color:dark ? "white":""}} >Wellcom My Login</h1>
      <h1 style={{display:up ? "block": "none" ,color:dark? "white":""}} >Wellcom My Sigup</h1>
    </div>
    </div>
  )
}

export default Login
