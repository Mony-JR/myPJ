import React from 'react'
import "./Me_style.css"

const Me_main = () => {
  return (
    <div className='me_mina22'  style={{display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    
    }}>

      <div style={{gap:'10%',
      display:'flex',
      flexDirection:'column',
      height:'100%',
      justifyContent:'center',
      
      }}>
      <h1 className='img_link' >This is my Project About Football</h1>
      <h2 className='img_link' >Click to open project</h2>
      
      </div>
      

      <div>
        <a className='img_link' href='https://footaball.vercel.app/' target='football' ><img className='img_link' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d45dba15-6c8e-4029-8b39-780ca930c62a/d7msxvy-922ded40-a07e-41fb-ae76-aca0ea788ccb.jpg/v1/fill/w_1024,h_615,q_75,strp/real_madrid_cartoon_champions_league_2014_by_mikoarc_d7msxvy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZDQ1ZGJhMTUtNmM4ZS00MDI5LThiMzktNzgwY2E5MzBjNjJhXC9kN21zeHZ5LTkyMmRlZDQwLWEwN2UtNDFmYi1hZTc2LWFjYTBlYTc4OGNjYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.o9DdiCDyGlx5d3A8ebU6VVa5QtWe-dA7CNXaqljaYkU' /></a>

      </div>
      
    </div>
  )
}

export default Me_main
