"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
  <div className={`flex justify-between pl-6 pr-6 h-16 items-center text-center fixed top-0 left-0 right-0 z-30 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'bg-black/50 border-b border-white/10' : 'bg-transparent border-b border-transparent'} text-white`}>
        <div className="flex items-center">
          <img
            className="w-2/3 sm:w-1/2 md:w-1/3"
            src="/images/logo-n4 (2).png"
            alt="logo"
          />
        </div>
        <div className="hidden md:flex m-0">
          <ul className="flex space-x-8 items-center">
            <li className="text-md">
              <Link className="text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-200 rounded-md px-1" href="/">
                Home
              </Link>
            </li>
            <li className="text-md">
              <Link className="text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-200 rounded-md px-1" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="text-md">
              <Link className="text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-200 rounded-md px-1" href="/Services">
                Services
              </Link>
            </li>
            <li className="text-md">
              <Link className="text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-200 rounded-md px-1" href="/tools">
                Tools
              </Link>
            </li>
            <li className="text-md">
              <Link className="text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-200 rounded-md px-1" href="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden m-2 flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-white p-2 rounded-md hover:bg-white/10 transition-colors">
            &#9776;
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-gradient-to-br from-gray-900/95 via-black/90 to-purple-900/95 text-white px-6 py-6 rounded-2xl shadow-2xl backdrop-blur-md z-40">
          <ul className="space-y-4">
            <li>
              <Link className="block text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 px-2 py-2 rounded-md transition-colors" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 px-2 py-2 rounded-md transition-colors" href="/Tools">
                Tools
              </Link>
            </li>
            <li>
              <Link className="block text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 px-2 py-2 rounded-md transition-colors" href="/Services">
                Services
              </Link>
            </li>
            <li>
              <Link className="block text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 px-2 py-2 rounded-md transition-colors" href="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="block text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 px-2 py-2 rounded-md transition-colors" href="/Contact">
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
