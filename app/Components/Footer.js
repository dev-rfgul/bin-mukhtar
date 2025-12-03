import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto py-8 flex justify-center items-center text-center">
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

        </div>
      </div>
    </div>
  );
};

export default Footer;
