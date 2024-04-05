import React from "react";
import Iframe from "react-iframe";

const Footer = () => {
  return (
    <div className="bg-primary   text-white">
      <div className="container  mx-auto py-12 flex justify-center items-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            {/* <h2 className="text-lg mb-6">Company.</h2> */}
            <img className="text-lg mb-6" src="./images/nav-logo.png"></img>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg mb-3">About</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#0">Profile</a>
              </li>
              <li className="mb-2">
                <a href="#0">Career</a>
              </li>
              <li className="mb-2">
                <a href="#0">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg mb-3">Find us</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#0">
                  <i className="bi bi-instagram"></i> company
                </a>
              </li>
              <li className="mb-2">
                <a href="#0">
                  <i className="bi bi-twitter"></i> company_id
                </a>
              </li>
              <li className="mb-2">
                <a href="#0">
                  <i className="bi bi-facebook"></i> company
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg mb-3">Contact</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#0">
                  <i className="bi bi-geo-alt-fill"></i> Jl. Letjen abc, Malang,
                  Jawa Timur
                </a>
              </li>
              <li className="mb-2">
                <a href="#0">
                  <i className="bi bi-telephone-fill"></i> +9898279387
                </a>
              </li>
              <li className="mb-2">
                <a href="#0">
                  <i className="bi bi-envelope-at-fill"></i> company@gmail.com
                </a>
              </li>
            </ul>
          </div>
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
          <div className="col-span-4">
            <div className="flex flex-col md:flex-row justify-center mt-8">
              <p className="text-center md:text-left ">
                &copy; 2024. All rights reserved
              </p>
            </div>
            <div className="col-span-4">
              <div className="flex flex-col md:flex-row justify-center mt-8">
                <a
                  href="https://devrfgul.netlify.com/"
                  target="_blank"
                  class="inline-block"
                >
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Contact Developer
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
