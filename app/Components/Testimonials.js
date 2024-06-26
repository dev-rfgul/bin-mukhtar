// services are being renederd through this component.

import React, { useState, useEffect } from "react";
import Link from "next/link";
const Testimonials = ({ buttonText }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [showPopup, setShowPopup] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);

  const testimonialData = [
    {
      id: 1,
      name: "Individual NTN Registration",
      text: "Just register your Individual NTN in 3 simple steps. Register, Upload, Pay.",
    },
    {
      id: 2,
      name: "Tax Filing",
      text: "No appointments, no documents, File your taxes within minutes.",
    },
    {
      id: 3,
      name: "Business NTN Registration      ",
      text: "The simplest and quickest way to start your business in pakistan.",
    },
    {
      id: 4,
      name: "Sales Tax Registration",
      text: " GST Registration was never this easy, Register your sales tax with Befiler Now.",
    },
    {
      id: 5,
      name: "Business Tax Filing",
      text: "Stop worrying about your taxes, Befiler team of experts got you covered.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 0.5) % testimonialData.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (showPopup) {
      const handleClosePopup = (e) => {
        if (e.target.id === "popup-background") {
          setShowPopup(false);
        }
      };

      window.addEventListener("click", handleClosePopup);
      return () => {
        window.removeEventListener("click", handleClosePopup);
      };
    }
  }, [showPopup]);

  // useEffect(() => {
  //   if (showPopup) {
  //     const handleClosePopup = (e) => {
  //       if (e.target.id === "popup-background") {
  //         setShowPopup(false);
  //       }
  //     };

  //     window.addEventListener("click", handleClosePopup);
  //     return () => {
  //       window.removeEventListener("click", handleClosePopup);
  //     };
  //   }
  // }, [showPopup]);
  useEffect(() => {
    if (showPopup) {
      constHandleClosePopup = (e) => {
        if (e.target.id === "popup-background") {
          setShowPopup(false);
        }
      };
      window.addEventListener("click", handleClosePopup);
      return () => {
        window.removeEventListener("click", handleClosePopup);
      };
    }
  }, [showPopup]);

  return (
    <div className="max-w-screen-lg mx-auto p-4 relative">
      <h1 className="text-6xl text-primary font-bold text-center ">Services</h1>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-currentIndex * 70}%)` }}
        >
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-1/3  flex-shrink-0 flex flex-col items-center justify-center col3"
            >
              <div className="neumorphism flex-col text-center items-center justify-center ">
                <h3 className=" text-2xl font-semibold text-primary">
                  {testimonial.name}
                </h3>
                <br />
                <br />
                <p className="text-gray-600">{testimonial.text}</p>
                <br />
                <br />
                <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                  <a
                    href="https://wa.me/923180481998?text=Hello , I am "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </button>
              </div>
            </div>
          ))}

          {showPopup && (
            <div
              id="popup-background"
              className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl text-black font-bold mb-4">
                  AI Generated Number: {AIGuess}
                </h2>
                <h2 className="text-2xl text-black font-bold mb-4">
                  Your Number: {number}
                </h2>

                <div className="mt-4">
                  <button
                    onClick={() => generateNextNumber(true)}
                    className="bg-gray-800 text-white px-4 py-2 rounded border border-transparent hover:bg-white hover:text-black hover:border-black hover:font-bold mr-5"
                  >
                    Greater
                  </button>

                  <button
                    onClick={() => generateNextNumber(false)}
                    className="bg-gray-800 text-white px-4 py-2 rounded border border-transparent hover:bg-white hover:text-black hover:border-black hover:font-bold mr-5"
                  >
                    Smaller
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="">
            <button className="button glow-button text-2xl font-bold hover:shadow hover:text-white bg-primary text-white p-2 rounded-lg mt-4">
              <Link
                href="/Services"
                as="/Services"
                onClick={() => setNavbar(!navbar)}
              >
                {buttonText}
              </Link>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l hidden md:block"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r hidden md:block"
      >
        Next
      </button>
      {showPopup && (
        <div
          id="popup-background"
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white p-8 rounded shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl text-black font-bold mb-4">
              AI Generated Number: {AIGuess}
            </h2>
            <h2 className="text-2xl text-black font-bold mb-4">
              Your Number: {number}
            </h2>

            <div className="mt-4">
              <button
                onClick={() => generateNextNumber(true)}
                className="bg-gray-800 text-white px-4 py-2 rounded border border-transparent hover:bg-white hover:text-black hover:border-black hover:font-bold mr-5"
              >
                Greater
              </button>

              <button
                onClick={() => generateNextNumber(false)}
                className="bg-gray-800 text-white px-4 py-2 rounded border border-transparent hover:bg-white hover:text-black hover:border-black hover:font-bold mr-5"
              >
                Smaller
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
