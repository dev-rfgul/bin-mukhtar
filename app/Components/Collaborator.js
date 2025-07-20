import React, { useState } from "react";

const Collaborator = ({
  partners = [
    { src: "./images/partner_2.png", name: "Strategic Partner", description: "Leading financial advisory firm" },
    { src: "./images/partner_3.png", name: "Legal Associates", description: "Corporate law specialists" },
    { src: "./images/partner_4.png", name: "Audit Partners", description: "Comprehensive audit services" },
    { src: "./images/partner_5.png", name: "Tech Solutions", description: "Digital transformation experts" },
    { src: "./images/partner_6.png", name: "Global Network", description: "International tax consultancy" },
    { src: "./images/partner_7.png", name: "Compliance Group", description: "Regulatory compliance experts" },
    { src: "./images/partner_8.png", name: "Business Hub", description: "SME business solutions" },
    { src: "./images/partner_9.png", name: "Financial Corp", description: "Investment advisory services" },
    { src: "./images/partner_10.png", name: "Tax Experts", description: "Specialized tax planning" },
    { src: "./images/partner_11.png", name: "Advisory Firm", description: "Strategic business consulting" },
    { src: "./images/partner_12.png", name: "Professional Services", description: "End-to-end business support" },
    { src: "./images/partner_13.png", name: "Enterprise Solutions", description: "Large scale implementations" },
    { src: "./images/partner_14.png", name: "Innovation Partners", description: "Technology-driven solutions" },
    { src: "./images/partner_2.png", name: "Trusted Allies", description: "Long-term partnerships" }
  ]
}) => {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h1 className="text-4xl lg:text-6xl text-primary font-bold mb-4 relative">
              Partners and Collaborators
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1  rounded-full"></div>
            </h1>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry-leading organizations to provide comprehensive
            solutions and deliver exceptional value to our clients worldwide.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
          {partners.slice(0, 7).map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center justify-center aspect-square overflow-hidden"
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              {/* Partner Logo */}
              <div className="relative z-20 w-full h-full flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>

            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {partners.slice(7, 14).map((partner, index) => (
            <div
              key={index + 7}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center justify-center aspect-square overflow-hidden"
              onMouseEnter={() => setHoveredPartner(index + 7)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              {/* Partner Logo */}
              <div className="relative z-20 w-full h-full flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600 font-medium">Trusted Partners</div>
            <div className="text-sm text-gray-500 mt-2">Across multiple industries</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-gray-600 font-medium">Countries Covered</div>
            <div className="text-sm text-gray-500 mt-2">Global network reach</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-gray-600 font-medium">Years Partnership</div>
            <div className="text-sm text-gray-500 mt-2">Average relationship duration</div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in Partnership?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join our network of trusted partners and expand your reach while providing enhanced value to your clients.
            </p>
            <button className="bg-primary text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
              <span>Become a Partner</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborator;