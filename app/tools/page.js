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
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      <Navbar />
      <main>
        <Calculator />
      </main>
      <Footer />
      <FixedLogos />
    </div>
  );
};

export default page;
