"use client"
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "./Contact";

const page = () => {
  return (
    <div>
      <Navbar />
      <Contact/>
      <Footer />
    </div>
  );
};

export default page;
