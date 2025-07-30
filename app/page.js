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
import Blogs from "./Components/Blogs";
import ScrollServices from "./Components/ScrollServices";
import Contact from "./Contact/page.js";
// import { Contact } from "lucide-react";

const page = () => {
  useSmoothScroll();
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      <Banner
        heading={"Welcome to Bin Mukhtar and Co"}
        secondaryHeading={"Leading Corporate Consultant  in Pakistan"}
        thirdHeading={
          "We provide legal services in Pakistan and UAE. Our services include Incorporation and Trademark Registration in Pakistan and UAE."
        }
        paragraph={""}
        buttonText="Contact Us  "
        imagePosition={"right"}
        imgSrc="/images/primary-pic-new (1).png"/>
      <ScrollServices />
      <Blogs />
      <Collaborator />
      <Banner
        heading="Say hello to the app that made everything even more convenient"
        thirdHeading={"1000+ Satisfied customers in Pakistan"}
        buttonText="Contact Us "
        buttonCount={1}
        imgSrc="/images/16-1.png"
      />
      <Team />
      <Awards />
      <Contact/>
      <Footer />
      <FixedLogos />
      <SpeedInsights />
    </div>
  );
};

export default page;
