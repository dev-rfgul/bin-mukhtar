"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner
        heading={"Welcome to Bin Mukhtar and Co"}
        secondaryHeading={"Leading Corporate Consultant  in Pakistan"}
        thirdHeading={
          "We are a full-service corporate firm in Pakistan with a team of experienced charted accountants."
        }
        paragraph={
          "We provide legal services in Pakistan and USA. Our services include Incorporation and Trademark Registration in Pakistan and USA."
        }
        buttonText="Contact Us  "
        imagePosition={"right"}
        imgSrc="./images/1.png"
      />
      {/* services component */}
      <Testimonials buttonText="View all services " />
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

      <Collaborator />
      <Banner
        heading="Say hello to the app that made everything even more convenient"
        thirdHeading={"1 million app downloads by Pakistani's"}
        buttonText="Contact Us "
        buttonCount={1}
        imagePosition="left"
        imgSrc="/images/1.png"
      />
      <FeatureVideos
        videoSrcArray={[
          "https://www.youtube.com/embed/8jPL_5BoKuA",
          " https://www.youtube.com/embed/Atq7VjVbaA8",
          "https://www.youtube.com/embed/2fDSAthUL1E",
          " https://www.youtube.com/embed/d3jXofmQm44",
        ]}
        headingArray={["Award 1", "Award 1", "Award 1", "Award 1"]}
        textArray={[
          "Bin Mukhtar & Co.’s experienced ...",
          "Bin Mukhtar & Co.’s experienced ...",

          "Bin Mukhtar & Co.’s experienced ...",
          "Bin Mukhtar & Co.’s experienced ...",
          "Bin Mukhtar & Co.’s experienced ...",
        ]}
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
      <FixedLogos />
    </div>
  );
};

export default page;
