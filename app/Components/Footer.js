import React from "react";
import Iframe from "react-iframe";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="  text-white">
      <div className="container  mx-auto py-12 flex justify-center items-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* logo here */}
          <div className="col-span-1">
            {/* <h2 className="text-lg mb-6">Company.</h2> */}
            <img className="text-lg mb-6" src="./images/nav-logo.png"></img>
          </div>
          {/* About section here */}
          <div className="col-span-1">
            <h5 className="text-lg mb-3 font-bold">About</h5>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="./tools" onClick={() => setNavbar(!navbar)}>
                  Tools
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Services"
                  as="/Services"
                  onClick={() => setNavbar(!navbar)}
                >
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/blogs"
                  as="/blogs"
                  onClick={() => setNavbar(!navbar)}
                >
                  Blogs
                </Link>
              </li>
              <li className="">
                <Link
                  href="/Contact"
                  as="/Contact"
                  onClick={() => setNavbar(!navbar)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Social media here */}
          <div className="col-span-1 ">
            <h5 className="text-lg font-bold  mb-3 flex items-center">
              Find us
            </h5>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/binmukhtarco/?paipv=0&eav=AfbVhjK_u6QzxNzfvM-57fGhNl2uoL3toOJ-K-9ym2oykAPxdEtg2fP1X06IJAwDKQo&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./images/facebook.png"
                    alt="Facebook Logo"
                    className="w-10 h-10"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/binmukhtarco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./images/instagram.png"
                    alt="Instagram Logo"
                    className="w-10 h-10"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/company/binmukhtarco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./images/linkedin.png"
                    alt="Linkedin Logo"
                    className="w-10 h-10"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* Contact section here */}
          <div className="col-span-1">
            <h5 className="text-lg mb-3">Contact</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#0">
                  <i className="bi bi-geo-alt-fill">
                    Capital Plaza, street #7 , Soan Gardens, Block D, Islamabad,
                    Punjab
                  </i>{" "}
                  <br></br> <br></br>
                  <i className="bi bi-geo-alt-fill">
                    Commercial Plaza bwp
                  </i>{" "}
                  <br></br> <br></br>
                  <i className="bi bi-geo-alt-fill">
                    Bin Mukhtar and Co , Near Shalimar Metro Station, Hans Road
                    , Hans Street Multan
                  </i>{" "}
                  <br></br>
                </a>
              </li>
              <li className="mb-2">
                <a href="#0">
                  <i className="bi bi-telephone-fill">+92-318 048 1998</i>
                </a>
              </li>
              <li className="mb-2">
                <a href="mailto:binmukhtarco@gmail.com">
                  <i className="bi bi-envelope-at-fill">
                    binmukhtarco@gmail.com
                  </i>
                </a>
              </li>
            </ul>
          </div>
          {/* google map here */}
          <div className="col-span-4">
            <div className="map mt-4 aspect-w-16 aspect-h-9">
              <Iframe
                className="rounded-3"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10823.120414694546!2d71.65043933161311!3d29.540050045567973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922f8b2bc8ea9a7%3A0x92059e7da2d949e0!2sLodhran%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1668694705539!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></Iframe>
            </div>
          </div>
          {/* all rights reserved  */}
          <div className="col-span-4">
            <div className="flex flex-col md:flex-row justify-center mt-8">
              <p className="text-center md:text-left ">
                &copy; 2024. All rights reserved
                <li className="">
                  <Link
                    href="/Privacy"
                    as="/Privacy"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/Terms"
                    as="/Terms"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Terms And Conditions
                  </Link>
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
