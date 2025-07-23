"use client";
import { ToastContainer, toast } from "react-toastify";
import useSmoothScroll from './config/useSmoothScroll';
import "react-toastify/dist/ReactToastify.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import Navbar from "./Components/Navbar";
import Awards from "./Components/Awards";
import Collaborator from "./Components/Collaborator";
import Banner from "./Components/Banner";
import Team from "./Components/Team";
import FixedLogos from "./Components/FixedLogo";
import Footer from "./Components/Footer";
import Contact from "./Contact/Contact";
import Blogs from "./Components/Blogs";
// import BlogPost from "./1stBlog/BlogPost";
import ScrollServices from "./Components/ScrollServices";

const page = () => {
  useSmoothScroll();
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      {/* <Animation /> */}
      <Banner
        heading={"Welcome to Bin Mukhtar and Co"}
        secondaryHeading={"Leading Corporate Consultant  in Pakistan"}
        thirdHeading={
          "We provide legal services in Pakistan and UAE. Our services include Incorporation and Trademark Registration in Pakistan and UAE."
        }
        paragraph={""}
        buttonText="Contact Us  "
        imagePosition={"right"}
        imgSrc="/images/primary-pic-new (1).png"
      // orange pic is finalezee
      />
      <ScrollServices />
      <Blogs />
      {/* services component */}
      {/* <Testimonials buttonText="View all services " /> */}
      {/* <Awards
        imgHeight={"w-full"}
        heading=" Featured Blogs"
        buttonText={"Read More"}
        bacol=" section bg-secondary"
        imgSrcArray={[
          "./images/blog-2.jpg",
          "./images/blog-9.jpg",
          "./images/blog-1.jpg",
          "./images/blog-5.jpg",
        ]}
        headingArray={[
          "FBR’s New Directive: A Step Towards Transparent Taxation in Pakistan",
          "How Freelancers Can File Their Income Tax Returns?",
          "Are You Required to File a Tax Return in Pakistan?",
          "A Guide on How to Run a Leather Export Busine",
        ]}
        textArray={["", "", "", ""]}
        routePath={["/1stBlog", "/2ndBlog", "/3rdBlog", "/4thBlog"]}
      /> */}
      <Collaborator />
      <Banner
        heading="Say hello to the app that made everything even more convenient"
        thirdHeading={"1000+ Satisfied customers in Pakistan"}
        buttonText="Contact Us "
        buttonCount={1}
        imgSrc="/images/16-1.png"
      />
      {/* <FeatureVideos/> */}
      <Team />
      <Awards />
      {/* <Contact /> */}
      <Footer />
      {/* <BlogPost/> */}
      <FixedLogos />
      <SpeedInsights />
      {/* <BlogPost /> */}
    </div>
  );
};

export default page;
