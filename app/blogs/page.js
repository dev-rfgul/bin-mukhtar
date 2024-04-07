"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import CardTemplate from "../Components/CardTemplate";
import Footer from "../Components/Footer";
import Awards from "../Components/Awards";

const Blogs = () => {
  return (
    <div>
      <Navbar />

      {/* blogs component*/}

      <Awards
        imgHeight={"w-full"}
        heading="Blogs"
        // heading="Blogs"
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
      <Awards
        imgHeight={"w-full"}
        // heading="Blogs"
        // heading="Blogs"
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
      <Awards
        imgHeight={"w-full"}
        // heading="Blogs"
        // heading="Blogs"
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
