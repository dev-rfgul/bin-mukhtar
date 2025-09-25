"use client"
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "./Contact";

const page = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
