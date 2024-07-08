"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import Navbar from "./Components/Navbar";
import Awards from "./Components/Awards";
import Collaborator from "./Components/Collaborator";
import Banner from "./Components/Banner";
import Team from "./Components/Team";
import FeatureVideos from "./Components/FeatureVideos";
import Testimonials from "./Components/Testimonials";
import FixedLogos from "./Components/FixedLogo";
import Footer from "./Components/Footer";
import Contact from "./Contact/Contact";
// import BlogPost from "./1stBlog/BlogPost";

const page = () => {
  return (
    <div>
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
        imgSrc="./images/primary-pic-new.png"

        // orange pic is finalezee
      />
      {/* services component */}
      <Testimonials buttonText="View all services " />

      <Awards
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
      />

      <Collaborator />
      <Banner
        heading="Say hello to the app that made everything even more convenient"
        thirdHeading={"1000+ Satisfied customers in Pakistan"}
        buttonText="Contact Us "
        buttonCount={1}
        imagePosition="left"
        imgSrc="/images/16-1.png"
      />

      <FeatureVideos
        videoSrcArray={[
          "https://www.youtube.com/embed/EsjiOF2ruZA?si=rp2CzgKwZccAx-OE",
          " https://www.youtube.com/embed/nkrx2yS8gmw?si=6oyD2Lc80TRxJ83d",
          "https://www.youtube.com/embed/LdUg-PJiWPA?si=MnomcaR5_LLd9cPq",
          "https://www.youtube.com/embed/jG9Rg0SsYpA?si=054gB_RbG3Gfwpcg",
        ]}
        headingArray={[
          "Enforcement of Section 114B of Income Tax Ordinance, 2001 to Enforce Filing of Returns",
          " How to Become filer in Pakistan | Active Filer Process in Pakistan 2024 | FBR ALT Complete Process",
          "What is Tax on Salary Income | How to Calculate Tax on Salary | Calculate Withholding Tax on Salary        ",
          " Income Tax Understanding Two Quick Tips | Income Tax Basic concept | FBR | IRIS",
        ]}
        textArray={["", "", "", "", ""]}
      />
      <Team />
      <Awards
        imgHeight={"w-1/3"}
        heading="Awards"
        imgSrcArray={[
          "./images/awards_1.png",
          "./images/awards_2.png",
          "./images/awards_3.png",
          "./images/awards_4.png",
        ]}
        headingArray={[
          "Won 2023 Startup",
          "Rated 4.6 Stars",
          "Online E-file Provider",
          "Safe & Secure",
        ]}
        textArray={[
          "of the year award, from PDA Pakistan Digital Awards",
          "12,000+ reviews and 4.6 rating by satisfied customers",
          "who has completed sandbox testing with FBR-IRIS",
          "your information is private and secure on our site",
        ]}
      />
      <Contact />
      <Footer />
      {/* <BlogPost/> */}
      <FixedLogos />
      <SpeedInsights />
      {/* <BlogPost /> */}
    </div>
  );
};

export default page;
