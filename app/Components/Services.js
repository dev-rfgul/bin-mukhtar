import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Clock, CheckCircle, Filter, Star, Award, Shield, Zap } from "lucide-react";

const ServiceCard = ({ services = [] }) => {
const services = [
{
title: "NTN Registration – Salaried",
price: "RS: 400",
time: "1-2 Working Days ",
requirements:
" ✓ Color copy of CNIC,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address ",
},
{
title: "NTN Registration – Business",
price: "RS: 2500",
time: "1-2 Working Days ",
requirements:
" ✓ Color copy of CNIC,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,,✓ Phone Number,✓ Email address ",
},
{
title: "NTN Registration – Partnership or AOP",
price: "RS: 2500",
time: "1-2 Working Days ",
requirements:
" ✓ Partnership Deed,✓ Partnership registration certificate,✓ Authorization of principal Officer,✓ Color copy of CNIC's of Partners,,✓ Rent agreement/ownership docs of Office premises,✓Letter Head,✓ Latest paid electricity bill,,✓ Phone Number,✓ Email address ",
},
{
title: "NTN Registration – Company",
price: "RS: 15000",
time: "2-3 Working Days ",
requirements:
" ✓ Incorporation Certificate,✓ Memorandum & Articles of Association,✓ Partnership registration certificate,✓ Authorization of principal Officer,✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,,✓ Phone Number,✓ Email address ",
},
{
title: "NTN Registration – NPO",
price: "RS: 15000",
time: "2-3 Working Days ",
requirements:
" ✓ NTN of all members,✓ Registration Certificate, ✓ Constitution of NPO,✓ Authorization of principal Officer,✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address ,✓ Any other document as required by the concerned authority ",
},
{
title: "Quarterly Withholding Statements Tax Filing",
price: "Minimum Fee: 5000",
time: "3-4 Working Days ",
requirements:
" ✓ Details of Taxes deducted at source during each quarter,✓ Other information as required",
},
{
title: "Annual Income Tax Filing- Salaried",
price: "Minimum Fee: 2650",
time: "4-5 Working Days ",
requirements:
" ✓ Annual Salary certificate,✓ Other Income sources if any, ✓ Annual expense,✓ Details of all owned assets,✓ Investments during the year,✓ Disposals the year,✓ Other inflows/outflows during the year,✓ Other information as required",
},
{
title: "Annual Income Tax Filing- Sole Proprietor",
price: "Minimum Fee: 5000",
time: "3-5 Working Days ",
requirements:
" ✓ Annual Accounts,✓ Other Income sources if any, ✓ Annual expense,✓ Details of all owned assets,✓ Investments during the year,✓ Disposals the year,✓ Other inflows/outflows during the year,✓ Other information as required",
},

{
title: "Annual Income Tax Filing- NPO/Charitable Trusts",
price: "Minimun Fee:15000",
time: "5 Working Days ",
requirements:
" ✓ Annual Audited Accounts, ✓ Taxes deducted at source,✓ Other information as required",
},
{
title: "GST Registration",
price: "Other Than Manufacturer: 15000",
time: "2-3 Working Days ",
requirements:
" ✓Bank Account Certificate, ✓ Acquisition Date,✓ Particulars of all branches (if any),✓ Authorization of principal Officer ,✓ GPS-tagged photographs of the business premises,✓ Consumer number with the gas and electricity supplier along with pictures of utilities meter,✓ GPS-tagged photographs of machinery and industrial electricity or gas meter installed (Manufacturer only),✓ Color copy of CNIC's of Partners,✓Rent agreement/ownership docs of Office premises, ✓ Latest paid electricity bill, ✓ Biometric Verification, ✓ Post Verification (Manufacturer only)",
},
{
title: "GST Registration",
price: "Manufacturer: 18000",
time: "2-3 Working Days ",
requirements:
" ✓Bank Account Certificate, ✓ Acquisition Date,✓ Particulars of all branches (if any),✓ Authorization of principal Officer ,✓ GPS-tagged photographs of the business premises,✓ Consumer number with the gas and electricity supplier along with pictures of utilities meter,✓ GPS-tagged photographs of machinery and industrial electricity or gas meter installed (Manufacturer only),✓ Color copy of CNIC's of Partners,✓Rent agreement/ownership docs of Office premises, ✓ Latest paid electricity bill, ✓ Biometric Verification, ✓ Post Verification (Manufacturer only)",
},
{
title: "Monthly Federal / Provincial Sales Tax Return Filing",
price: "Minimun Fee: 5000",
time: "3-4 Working Days ",
requirements:
" ✓ Copies of Sales Invoices, ✓ Copies of purchases Invoices, ✓ Bank Statements, ✓ Other information as required",
},
{
title: "PST Registarion -Individual",
price: "RS: 15000",
time: "7-10 Working Days ",
requirements:
" ✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises , ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity, ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer , ✓ Signed Application Form",
},
{
title: "PST Registarion -Partnership",
price: "RS: 15000",
time: "7-10 Working Days ",
requirements:
"✓Partnership Certificate,✓ Partnership deed,✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises , ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity, ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer , ✓ Signed Application Form",
},
{
title: "PST Registarion -Company",
price: "RS: 15000",
time: "7-10 Working Days ",
requirements:
"✓ Incorporation Certificate,✓ Memorandum of Association ,✓ Articles of Association, ✓ Incorporation Form/ Form A & 29,✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises , ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity, ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer , ✓ Signed Application Form",
},

{
title: "Private Limited Company Registration",
price: "RS: 12000",
time: "2-3 Working Days ",
requirements:
" ✓Three Names of the proposed company ,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓ NTN of the proposed directors / subscribers ,✓ Registered address / correspondence address of the proposed Company,✓ The principal business of the proposed company, ✓ Nature of the business activity, ✓ Authorized Capital,✓ Paid up capital,✓ Value per share e.g.Rs. 10 - Rs. 50 or Rs. 100 etc, ✓ Combination of Shares agreed to be subscribed by each director / subscriber,✓ Name of the Chief Executive of the Proposed Company, ✓ Authorization from other subscribers. (For Offline only), ✓ Telephone numbers and email ID of all the proposed directors, ✓ Telephone numbers and email ID of all the proposed directors of the Company, ✓ Name of declarant person, ✓ SECP login details of the proposed directors / subscribers(if any)",
},
{
title: "Single Member Company Registration",
price: "RS: 12000",
time: "2-3 Working Days ",
requirements:
" ✓Three Names of the proposed company ,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓ NTN of the proposed directors / subscribers ,✓ Registered address / correspondence address of the proposed Company,✓ The principal business of the proposed company, ✓ Nature of the business activity, ✓ Authorized Capital,✓ Paid up capital,✓ Value per share e.g.Rs. 10 - Rs. 50 or Rs. 100 etc, ✓ Name of the Chief Executive of the Proposed Company, ✓ Authorization from other subscribers. (For Offline only), ✓ Telephone numbers and email ID of all the proposed directors, ✓ Telephone numbers and email ID of all the proposed directors of the Company, ✓ Name of declarant person, ✓ SECP login details of the proposed directors / subscribers(if any)",
},

{
title: "Limited Liability Partnership Registration (LLP)",
price: "RS: 25000",
time: "7-10 Working Days ",
requirements:
" ✓Three Names of the proposed company ,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓ Partnership deeds duly executed,✓ NTN of the proposed directors / subscribers ,✓ Registered address / correspondence address of the proposed Company,✓ The principal business of the proposed company, ✓ Nature of the business activity, ✓ Authorized Capital,✓ Paid up capital,✓ Value per share e.g.Rs. 10 - Rs. 50 or Rs. 100 etc,✓ Combination of Shares agreed to be subscribed by each director / subscriber, ✓ Name of the Chief Executive of the Proposed Company, ✓ Authorization from other subscribers. (For Offline only), ✓ Telephone numbers and email ID of all the proposed directors, ✓ Telephone numbers and email ID of all the proposed directors of the Company, ✓ Name of declarant person, ✓ SECP login details of the proposed directors / subscribers(if any)",
},
{
title: "Partnership or AOP Registration",
price: "RS: 25000",
time: "5-7 Working Days ",
requirements:
"✓ Partnership Deed,✓ Signed Partnership Form,✓ Authorization of principal Officer,✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letterhead,, ✓ Latest paid electricity bill, ✓ Phone Number, ✓ Email address",
},
{
title: "Trademark Registration",
price: "RS: 70000",
time: " ",
requirements:
"✓ TM-1 in duplicate, ✓ Six representations affixed on a durable paper of 13x8 inch,✓ CNIC of the Trademark Holder/partners,✓ Color copy of CNIC's of Partners, ✓ Specification of goods or services sought to be protected in any class, ✓ Residential address of holder or Letterhead of the Business , ✓ Other Information or Documents as required,",
},
{
title: "Copyright Registration",
price: "RS: 70000",
time: " ",
requirements:
"✓ Two Copies of work, ✓ Demand Draft / Pay order of fee as applicable per work, ✓ CNIC of the Copyrights Holder / partners, ✓ NOC from publisher if work has been published and publisher is different from applicant, ✓ Search certificate from trademark Office if the work is capable of being used on goodss,✓ Power of attorney , ✓ Other Information or Documents as required,",
},
{
title: "Patent Registration",
price: "RS: 150000",
time: " ",
requirements:
"✓ Form P - 1 or Form P - 1A application without priority, ✓ Form P - 2 or Form P - 2A application with priority, ✓ Form P- 3 for provisional or Form P- 3A for complete specification), ✓ Patent Specification, ✓ Drawing(s) - if any,✓ Demand Draft / Pay order of fee as applicable per work, ✓ Form P - 28(power of Attorney) if any, ✓ Priority document(for convention application),✓ CNIC of the Copyrights applicant, ✓ Other Information or Documents as required",
},


// USA services

{
title: "Company Formation in USA - LLC / Inc. (C Corp)",
price: "State fee $ 120",
time: "3 Business Days ",
requirements:
"✓ 2 Suggested Names of the Company, ✓ CNIC (English Only) / Passport of Director(s), ",
},

{
title: "Employer Identification Number (EIN)",
price: "$150",
time: "30 Business Days",
requirements:
"✓ Article of Organization, ✓ Certificate of Organization, ",
},
{
title: "Open A US Bank Account",
price: "$100",
time: "30 Business Days",
requirements:
"✓ Article of Organization, ✓ Certificate of Organization, ✓ CNIC (English Only) / Passport of Director(s) ,✓ EIN",
},
{
title: "USA Company Formation - Complete Package",
price: "$100",
time: "Company Formation: 3 Business Days , EIN: 30 Business days Account: Business Days after EIN, Bank Account:30 Business Days after EIN",
requirements:
"✓ 2 Suggested Names of the Company, ✓ CNIC (English Only) / Passport of Director(s)",
},
{
title: "Tax Filing - State: LLC / Inc. (C Corp)",
price: "$200",
time: "3 Business Days",
requirements:
"✓ Financial Statements, ✓ Last Year's Tax Return- if applicable",
},
{
title: "Tax Filing - Federal: LLC / Inc. (C Corp)",
price: "$200",
time: "3 Business Days",
requirements:
"✓ Financial Statements, ✓ Last Year's Tax Return- if applicable",
},

// Add more service objects here as needed
];


  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { name: "All", icon: <Filter className="w-4 h-4" /> },
    { name: "Income Tax return", icon: <Award className="w-4 h-4" /> },
    { name: "Company's Registration", icon: <Shield className="w-4 h-4" /> },
    { name: "Sales Tax Registration", icon: <Star className="w-4 h-4" /> },
    { name: "Intellectual Property", icon: <Zap className="w-4 h-4" /> },
    { name: "USA services", icon: <MessageCircle className="w-4 h-4" /> }
  ];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeFilter === "All") {
        setFilteredServices(services);
      } else {
        setFilteredServices(services.filter(service => service.category === activeFilter));
      }
      setIsLoading(false);
    }, 300);
  }, [activeFilter, services]);

  const formatRequirements = (requirements) => {
    return requirements.split(',').filter(req => req.trim()).map(req => req.trim());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 blur-3xl -z-10"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Award-Winning Services
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Our Business Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Registering a business can be quite stressful. Worry not! Get expert assistance on how and which business structure to select and start your entrepreneurial journey with a bang!
            </p>
            
            {/* Enhanced Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveFilter(category.name)}
                  className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category.name
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="text-sm md:text-base">{category.name}</span>
                  </div>
                  {activeFilter === category.name && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!isLoading && filteredServices.map((service, index) => (
            <div
              key={service.id || index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                hoveredCard === index ? 'shadow-2xl shadow-blue-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🔥 Popular
                </div>
              )}

              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {service.price}
                    </div>
                    {service.rating && (
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{service.rating}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                {service.description && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                )}

                {/* Timeline */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-blue-50/50 rounded-xl">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Timeline:</span>
                  <span className="text-sm text-blue-700 font-semibold">{service.time}</span>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-900">Requirements:</span>
                  </div>
                  <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar">
                    {formatRequirements(service.requirements).map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/923329296026?text=Hello , I am interested in your services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+92-332-9296026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!isLoading && filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Services Found</h3>
              <p className="text-gray-600">No services match the selected category. Try a different filter.</p>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e0 transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 2px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;