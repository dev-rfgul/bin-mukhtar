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
import CardTemplate from "./Components/CardTemplate";
import Testimonials from "./Components/Testimonials";
import FixedLogos from "./Components/FixedLogo";
import Footer from "./Components/Footer";
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
        buttonText="Learn More"
        imagePosition={"right"}
        imgSrc="./images/1.png"
      />

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

      <Banner
        heading="Say hello to the app that made everything even more convenient"
        thirdHeading={"1 million app downloads by Pakistani's"}
        buttonText="Contact Us On Whatsapp"
        b
        buttonCount={1}
        imagePosition="left"
        imgSrc="/images/1.png"
      />
      {/* awards component*/}

      {/*collaborator component*/}
      <Collaborator />

      {/*  */}

      {/* team component */}
      <Team />

      {/* featured videos component*/}

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
      {/* services  */}
      <Awards
      imgHeight={"w-1/3"}
        heading="Services We Offer"
        imgSrcArray={[
          "./images/icon-1.png",
          "./images/icon-2.png",
          "./images/icon-3.png",
          // "./images/awards_4.png",
        ]}
        headingArray={["Tax", "Corporate", "SEO and Digital Marketing"]}
        textArray={[
          "of the year award, from PDA Pakistan Digital Awards",
          "12,000+ reviews and 4.6 rating by satisfied customers",
          "who has completed sandbox testing with FBR-IRIS",
          // "your information is private and secure on our site",
        ]}
      />
      {/* services row2  */}
      <Awards
      imgHeight={"w-1/3"}
        // heading="Services"
        imgSrcArray={[
          "./images/icon-4.png",
          "./images/icon-5.png",
          "./images/icon-1.png",
          // "./images/awards_4.png",
        ]}
        headingArray={[
          "Business Service & Outsourcing",

          "Web Development",

          "Advisory",
        ]}
        textArray={[
          "of the year award, from PDA Pakistan Digital Awards",
          "12,000+ reviews and 4.6 rating by satisfied customers",
          "who has completed sandbox testing with FBR-IRIS",
          // "your information is private and secure on our site",
        ]}
      />

      {/* testimonials component */}

      <Testimonials
      buttonText="View all services " />
      {/* blogs component*/}
    

      <Footer />

      {/* fixed logos of whatsapp and AI */}
      <FixedLogos />
    </div>
  );
};

export default page;
