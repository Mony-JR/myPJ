import React from 'react'
import { Link, NavLink, BrowserRouter as Roouter,Route,Routes,Outlet } from 'react-router-dom'
import Home from './File_/Home'
import Login from './File_/Login'
import Product from './File_/Product'
import Info from './File_/Info'
import { useState,useEffect } from 'react'
import About from './File_/About'


const App = () => {


  return (
    <div >
      <Roouter>
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/Service' element={<h1>Hello Service</h1>} />
          <Route path='/Product' element={<Product/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path="/Product/:id" element ={<Info />}/>
          
        </Routes>
        
      </Roouter>
      <Outlet/>
    
    </div>
  )
}

export default App
