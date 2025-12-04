"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import NavBar from '../Components/Navbar'
import Services from "./Services";
import Footer from '../Components/Footer';

const Page = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const search = searchParams.get('search')

  return (
    <div className='bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
      <NavBar/>
      <Services initialCategory={category} initialSearch={search} />
      <Footer/>
    </div>
  )
}

export default Page
