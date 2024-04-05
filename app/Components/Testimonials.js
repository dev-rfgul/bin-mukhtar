import React, { useState, useEffect } from "react";

const TestimonialCarousel = ({ buttonText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialData = [
    {
      id: 1,
      name: "Muhammad Fahad",
      image: "./images/testimonial-1.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Muhammad ",
      image: "./images/testimonial-1.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Jane ",
      image: "./images/testimonial-1.jpeg",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Jane  Sahb",
      image: "./images/testimonial-1.jpeg",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Jane  Sahb 5",
      image: "./images/testimonial-1.jpeg",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Jane  Sahb 5",
      image: "./images/testimonial-1.jpeg",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Jane  Sahb 6",
      image: "./images/testimonial-1.jpeg",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Jane  Sahb 7",
      image: "./images/testimonial-1.jpeg",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 3000);

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

  return (
    <div className="max-w-screen-lg mx-auto p-4 relative">
      <h1 className="text-6xl text-primary font-bold text-center ">
        Testimonials
      </h1>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-currentIndex * 40}%)` }}
        >
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-1/3 flex-shrink-0 flex flex-col items-center justify-center col3"
            >
              <div className="neumorphism flex-col text-center items-center justify-center ">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
                <button className="bg-primary">contact us</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="">
            <button className="button glow-button text-2xl font-bold hover:shadow hover:text-white bg-primary text-white p-2 rounded-lg mt-4">
              {buttonText}
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
    </div>
  );
};

export default TestimonialCarousel;
