"use client"

import React from 'react'
import NavBar from '../Components/Navbar'
import Services from "./Services";
import Footer from '../Components/Footer';

const page = () => {
  return (
    <div className='bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
      <NavBar/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default page
