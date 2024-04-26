"use client";
import React from "react";
// import "../styling/awards.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Awards from "../Components/Awards";

const Blogs = () => {
  return (
    <div>
      <Navbar />

      {/* blogs component*/}

      <Awards
        imgHeight={"w-full"}
        heading=" Featured Blogs"
        bacol=" section bg-secondary"
        imgSrcArray={[
          "./images/blog-5.jpg",
          "./images/blog-4.jpg",
          "./images/blog-1.jpg",
          "./images/blog-2.jpg",
        ]}
        headingArray={[
          "Business Service & Outsourcing",

          "Web Development",

          "Advisory",
          "Advisory",
        ]}
        textArray={[
          "of the year award, from PDA Pakistan Digital Awards",
          "12,000+ reviews and 4.6 rating by satisfied customers",
          "who has completed sandbox testing with FBR-IRIS",
          "your information is private and secure on our site",
        ]}
      />


      <Footer />
    </div>
  );
};

export default Blogs;
