"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import Navbar from "../Components/Navbar";
import Calculator from "./Calculator";
import Footer from "../Components/Footer";
import FixedLogos from '../Components/FixedLogo';

const page = () => {
  return (
    <div>
      <Navbar />{" "}
     
      <Calculator/>
      <Footer/>
      <FixedLogos/>
    </div>
  );
};

export default page;
