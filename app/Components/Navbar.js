// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// function NavBar() {
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <div>
//       <nav className="w-full bg-primary fixed top-0 left-0 right-0 z-10">
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className=" flex items-center justify-between py- md:py-5 md:block">
//               {/* LOGO */}
//               <Link href="/">
//                 <img className="w-1/2" src="./images/logo-n4 (1).png"></img>
//                 {/* 4th logo is finalized */}
//               </Link>
//               {/* HAMBURGER BUTTON FOR MOBILE */}
//               <div className="md:hidden">
//                 <img
//                   src=""
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 ></img>
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <Image
//                       src="/images/icon-nav-2.png"
//                       width={30}
//                       height={30}
//                       alt="logo"
//                     />
//                   ) : (
//                     <Image
//                       src="/images/icon-nav.png"
//                       width={30}
//                       height={30}
//                       alt="logo"
//                       className="focus:border-none active:border-none"
//                     />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? "p-12 md:p-0 block" : "hidden"
//               }`}
//             >
//               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
//                 <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="./tools" onClick={() => setNavbar(!navbar)}>
//                     Tools
//                   </Link>
//                 </li>

//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link
//                     href="/Services"
//                     as="/Services"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     Services
//                   </Link>
//                 </li>

//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link
//                     href="/blogs"
//                     as="/blogs"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     Blogs
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link
//                     href="/Contact"
//                     as="/Contact"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;



"use client";

import React, { useState } from "react";
import Link from "next/link";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="flex justify-between pl-11 pr-11 h-16 text-center bg-primary text-white">
        <div className="flex items-center">
          <img
            className="w-2/3 sm:w-1/2 md:w-1/3"
            src="/images/logo-n4 (2).png"
            alt="logo"
          />
        </div>

        <div className="hidden md:flex m-4">
          <ul className="flex space-x-11">
            <li className="text-md">
              <Link className="hover:text-gray-700" href="/">
                Home
              </Link>
            </li>
            <li className="text-md">
              <Link className="hover:text-gray-700" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="text-md">
              <Link className="hover:text-gray-700" href="/Services">
                Services
              </Link>
            </li>
            <li className="text-md">
              <Link className="hover:text-gray-700" href="/tools">
                Tools
              </Link>
            </li>
            <li className="text-md">
              <Link className="hover:text-gray-700" href="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden m-4 flex items-center">
          <button onClick={toggleMenu} className="text-xl">
            &#9776;
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white text-black px-11 py-4">
          <ul>
            <li className="py-2 border-b border-gray-300">
              <Link className="block hover:text-gray-700" href="/">
                Home
              </Link>
            </li>
            <li className="py-2 border-b border-gray-300">
              <Link className="block hover:text-gray-700" href="/Tools">
                Tools
              </Link>
            </li>
            <li className="py-2 border-b border-gray-300">
              <Link className="block hover:text-gray-700" href="/Services">
                Services
              </Link>
            </li>
            <li className="py-2 border-b border-gray-300">
              <Link className="block hover:text-gray-700" href="#"></Link>
            </li>
            <li className="py-2 border-b border-gray-300">
              <Link className="block hover:text-gray-700" href="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
