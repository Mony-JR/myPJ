import React from 'react'

const Me_pro = () => {
  
  
  return (
    <div className='me_main'>
      <div className='me_helo'>
        <div className='me_about'>
          <h1 className='me_name' >My name is  </h1>
          <h1 className='Mony'>Mony JR</h1>
        </div>
        
      <p className='me_p'>I'm Developer <br/> I'm the junior Developer of Web </p>
      <h2>PrO_Skill</h2>
      <div className='box_skill'>
      <span className='me_skill'><li>Js</li> 99% <label></label></span>
      <span className='me_skill'><li>C++</li> 95% <label className='me_cpp'></label></span>
      <span className='me_skill'><li>Java</li> 80% <label className='me_py'></label></span>
      
      </div>
     
      
      </div>
      
      <div>
        <img className='me-img' src={require("../img_/Me.jpg")} />
      </div>
      
    </div>
  )
}

export default Me_pro
