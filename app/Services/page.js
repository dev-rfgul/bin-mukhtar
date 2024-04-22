"use client"

import React from 'react'
import NavBar from '../Components/Navbar'
import Services from "./Services";
import Footer from '../Components/Footer';

const page = () => {
  return (
    <div>
      <NavBar/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default page
