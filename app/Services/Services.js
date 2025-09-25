// import React from "react";

// const ServiceCard = () => {
//   const services = [
//     {
//       title: "NTN Registration – Salaried",
//       price: "RS: 400",
//       time: "1-2 Working Days      ",
//       requirements:
//         "   ✓ Color copy of CNIC,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address ",
//     },
//     {
//       title: "NTN Registration – Business",
//       price: "RS: 2500",
//       time: "1-2 Working Days      ",
//       requirements:
//         "   ✓ Color copy of CNIC,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,,✓ Phone Number,✓ Email address ",
//     },
//     {
//       title: "NTN Registration – Partnership or  AOP",
//       price: "RS: 2500",
//       time: "1-2 Working Days      ",
//       requirements:
//         "  ✓ Partnership Deed,✓ Partnership registration certificate,✓  Authorization of principal Officer,✓  Color copy of CNIC's of Partners,,✓ Rent agreement/ownership docs of Office premises,✓Letter Head,✓ Latest paid electricity bill,,✓ Phone Number,✓ Email address ",
//     },
//     {
//       title: "NTN Registration – Company",
//       price: "RS: 15000",
//       time: "2-3 Working Days      ",
//       requirements:
//         "  ✓  Incorporation Certificate,✓  Memorandum & Articles of Association,✓   Partnership registration certificate,✓ Authorization of principal Officer,✓  Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,,✓ Phone Number,✓ Email address ",
//     },
//     {
//       title: "NTN Registration – NPO",
//       price: "RS: 15000",
//       time: "2-3 Working Days      ",
//       requirements:
//         " ✓ NTN of all members,✓  Registration Certificate, ✓   Constitution of NPO,✓ Authorization of principal Officer,✓  Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address ,✓  Any other document as required by the concerned authority ",
//     },
//     {
//       title: "Quarterly Withholding Statements Tax Filing",
//       price: "Minimum Fee: 5000",
//       time: "3-4 Working Days      ",
//       requirements:
//         " ✓ Details of Taxes deducted at source during each quarter,✓ Other information as required",
//     },
//     {
//       title: "Annual Income Tax Filing- Salaried",
//       price: "Minimum Fee: 2650",
//       time: "4-5 Working Days      ",
//       requirements:
//         " ✓ Annual Salary certificate,✓ Other Income sources if any, ✓ Annual expense,✓ Details of all owned assets,✓ Investments during the year,✓ Disposals the year,✓ Other inflows/outflows during the year,✓ Other information as required",
//     },
//     {
//       title: "Annual Income Tax Filing- Sole Proprietor",
//       price: "Minimum Fee: 5000",
//       time: "3-5 Working Days      ",
//       requirements:
//         " ✓ Annual Accounts,✓ Other Income sources if any, ✓ Annual expense,✓ Details of all owned assets,✓ Investments during the year,✓ Disposals the year,✓ Other inflows/outflows during the year,✓ Other information as required",
//     },

//     {
//       title: "Annual Income Tax Filing- NPO/Charitable Trusts",
//       price: "Minimun Fee:15000",
//       time: "5 Working Days      ",
//       requirements:
//         " ✓ Annual Audited Accounts, ✓ Taxes deducted at source,✓ Other information as required",
//     },
//     {
//       title: "GST Registration",
//       price: "Other Than Manufacturer: 15000",
//       time: "2-3 Working Days      ",
//       requirements:
//         " ✓Bank Account Certificate, ✓  Acquisition Date,✓  Particulars of all branches (if any),✓  Authorization of principal Officer ,✓  GPS-tagged photographs of the business premises,✓ Consumer number with the gas and electricity supplier along with pictures of utilities meter,✓ GPS-tagged photographs of machinery and industrial electricity or gas meter installed (Manufacturer only),✓ Color copy of CNIC's of Partners,✓Rent agreement/ownership docs of Office premises, ✓ Latest paid electricity bill, ✓ Biometric Verification, ✓  Post Verification (Manufacturer only)",
//     },
//     {
//       title: "GST Registration",
//       price: "Manufacturer: 18000",
//       time: "2-3 Working Days      ",
//       requirements:
//         " ✓Bank Account Certificate, ✓  Acquisition Date,✓  Particulars of all branches (if any),✓  Authorization of principal Officer ,✓  GPS-tagged photographs of the business premises,✓ Consumer number with the gas and electricity supplier along with pictures of utilities meter,✓ GPS-tagged photographs of machinery and industrial electricity or gas meter installed (Manufacturer only),✓ Color copy of CNIC's of Partners,✓Rent agreement/ownership docs of Office premises, ✓ Latest paid electricity bill, ✓ Biometric Verification, ✓  Post Verification (Manufacturer only)",
//     },
//     {
//       title: "Monthly Federal / Provincial Sales Tax Return Filing",
//       price: "Minimun Fee: 5000",
//       time: "3-4 Working Days      ",
//       requirements:
//         " ✓ Copies of Sales Invoices, ✓ Copies of purchases Invoices, ✓ Bank Statements, ✓ Other information as required",
//     },
//     {
//       title: "PST Registarion -Individual",
//       price: "RS: 15000",
//       time: "7-10 Working Days      ",
//       requirements:
//         " ✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises , ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity,  ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer , ✓ Signed Application Form",
//     },
//     {
//       title: "PST Registarion -Partnership",
//       price: "RS: 15000",
//       time: "7-10 Working Days      ",
//       requirements:
//         "✓Partnership Certificate,✓ Partnership deed,✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises , ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity,  ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer , ✓ Signed Application Form",
//     },
//     {
//       title: "PST Registarion -Company",
//       price: "RS: 15000",
//       time: "7-10 Working Days      ",
//       requirements:
//         "✓ Incorporation Certificate,✓  Memorandum of Association ,✓  Articles of Association, ✓ Incorporation Form/ Form A & 29,✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises , ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity,  ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer , ✓ Signed Application Form",
//     },

//     {
//       title: "Private Limited Company Registration",
//       price: "RS: 12000",
//       time: "2-3 Working Days      ",
//       requirements:
//         " ✓Three Names of the proposed company ,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓ NTN of the proposed directors / subscribers ,✓  Registered address / correspondence address of the proposed Company,✓   The principal business of the proposed company, ✓     Nature of the business activity, ✓ Authorized Capital,✓ Paid up capital,✓   Value per share e.g.Rs. 10 - Rs. 50 or Rs. 100 etc, ✓ Combination of Shares agreed to be subscribed by each director / subscriber,✓   Name of the Chief Executive of the Proposed Company, ✓ Authorization from other subscribers. (For Offline only),  ✓ Telephone numbers and email ID of all the proposed directors,  ✓     Telephone numbers and email ID of all the proposed directors of the Company, ✓  Name of declarant person, ✓ SECP login details of the proposed directors / subscribers(if any)",
//     },
//     {
//       title: "Single Member Company Registration",
//       price: "RS: 12000",
//       time: "2-3 Working Days      ",
//       requirements:
//         " ✓Three Names of the proposed company ,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓ NTN of the proposed directors / subscribers ,✓  Registered address / correspondence address of the proposed Company,✓   The principal business of the proposed company, ✓     Nature of the business activity, ✓ Authorized Capital,✓ Paid up capital,✓   Value per share e.g.Rs. 10 - Rs. 50 or Rs. 100 etc, ✓   Name of the Chief Executive of the Proposed Company, ✓ Authorization from other subscribers. (For Offline only),  ✓ Telephone numbers and email ID of all the proposed directors,  ✓     Telephone numbers and email ID of all the proposed directors of the Company, ✓  Name of declarant person, ✓ SECP login details of the proposed directors / subscribers(if any)",
//     },

//     {
//       title: "Limited Liability Partnership Registration (LLP)",
//       price: "RS: 25000",
//       time: "7-10 Working Days      ",
//       requirements:
//         " ✓Three Names of the proposed company ,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓   Partnership deeds duly executed,✓ NTN of the proposed directors / subscribers ,✓  Registered address / correspondence address of the proposed Company,✓   The principal business of the proposed company, ✓     Nature of the business activity, ✓ Authorized Capital,✓ Paid up capital,✓   Value per share e.g.Rs. 10 - Rs. 50 or Rs. 100 etc,✓    Combination of Shares agreed to be subscribed by each director / subscriber, ✓   Name of the Chief Executive of the Proposed Company, ✓ Authorization from other subscribers. (For Offline only),  ✓ Telephone numbers and email ID of all the proposed directors,  ✓     Telephone numbers and email ID of all the proposed directors of the Company, ✓  Name of declarant person, ✓ SECP login details of the proposed directors / subscribers(if any)",
//     },
//     {
//       title: "Partnership or AOP Registration",
//       price: "RS: 25000",
//       time: "5-7 Working Days      ",
//       requirements:
//         "✓ Partnership Deed,✓  Signed Partnership Form,✓       Authorization of principal Officer,✓  Color copy of CNIC's of Partners,✓  Rent agreement/ownership docs of Office premises,✓   Letterhead,, ✓ Latest paid electricity bill, ✓ Phone Number, ✓   Email address",
//     },
//     {
//       title: "Trademark Registration",
//       price: "RS: 70000",
//       time: "      ",
//       requirements:
//         "✓  TM-1 in duplicate,   ✓  Six representations affixed on a durable paper of 13x8 inch,✓    CNIC of the Trademark Holder/partners,✓  Color copy of CNIC's of Partners,  ✓  Specification of goods or services sought to be protected in any class, ✓       Residential address of holder or Letterhead of the Business   , ✓       Other Information or Documents as required,",
//     },
//     {
//       title: "Copyright Registration",
//       price: "RS: 70000",
//       time: "      ",
//       requirements:
//         "✓    Two Copies of work, ✓   Demand Draft / Pay order of fee as applicable per work, ✓ CNIC of the Copyrights Holder / partners, ✓     NOC from publisher if work has been published and publisher is different from applicant,    ✓   Search certificate from trademark Office if the work is capable of being used on goodss,✓     Power of attorney , ✓       Other Information or Documents as required,",
//     },
//     {
//       title: "Patent Registration",
//       price: "RS: 150000",
//       time: "      ",
//       requirements:
//         "✓   Form P - 1 or Form P - 1A application without priority,  ✓ Form P - 2 or Form P - 2A application with priority,  ✓  Form P- 3 for provisional or Form P- 3A for complete specification), ✓       Patent Specification, ✓ Drawing(s) - if any,✓    Demand Draft / Pay order of fee as applicable per work, ✓ Form P - 28(power of Attorney) if any, ✓ Priority document(for convention application),✓ CNIC of the Copyrights applicant, ✓  Other Information or Documents as required",
//     },

//     // USA services

//     {
//       title: "Company Formation in USA - LLC / Inc. (C Corp)",
//       price: "State fee $ 120",
//       time: "3 Business Days      ",
//       requirements:
//         "✓ 2 Suggested Names of the Company, ✓ CNIC (English Only) / Passport of Director(s), ",
//     },

//     {
//       title: "Employer Identification Number (EIN)",
//       price: "$150",
//       time: "30 Business Days",
//       requirements:
//         "✓ Article of Organization, ✓ Certificate of Organization, ",
//     },
//     {
//       title: "Open A US Bank Account",
//       price: "$100",
//       time: "30 Business Days",
//       requirements:
//         "✓ Article of Organization, ✓ Certificate of Organization, ✓  CNIC (English Only) / Passport of Director(s) ,✓ EIN",
//     },
//     {
//       title: "USA Company Formation - Complete Package",
//       price: "$100",
//       time: "Company Formation: 3 Business Days , EIN:  30 Business days Account:  Business Days after EIN, Bank Account:30 Business Days after EIN",
//       requirements:
//         "✓  2 Suggested Names of the Company, ✓  CNIC (English Only) / Passport of Director(s)",
//     },
//     {
//       title: "Tax Filing - State: LLC / Inc. (C Corp)",
//       price: "$200",
//       time: "3 Business Days",
//       requirements:
//         "✓ Financial Statements, ✓   Last Year's Tax Return- if applicable",
//     },
//     {
//       title: "Tax Filing - Federal: LLC / Inc. (C Corp)",
//       price: "$200",
//       time: "3 Business Days",
//       requirements:
//         "✓ Financial Statements, ✓   Last Year's Tax Return- if applicable",
//     },

//     // Add more service objects here as needed
//   ];

//   return (
//     <div className="bg-white shadow-md rounded-md p-4 mb-4">
//       <div className="section">
//         {/* <div className="row">
//           <div className="col">
//             <div>
//               <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6">
//                 Our Business Services
//               </h1>
//               <p className="mb-4 lg:mb-6">
//                 Registering a business can be quite stressful. Worry not! Get
//                 expert assistance on how and which business structure to select
//                 and start your entrepreneurial journey with a bang!
//               </p>
//             </div>
//             <div className="   space-x-4 space-y-4 text-center justify-center items-center">
//               <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
//                 All
//               </button>
//               <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
//                 Income Tax return
//               </button>
//               <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
//                 Company's Registration
//               </button>
//               <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
//                 Sales Tax Registration
//               </button>

//               <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
//                 Intellectual Property
//               </button>
//               <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
//                 USA services
//               </button>
//             </div>
//           </div>
//         </div> */}

//         <div class="container mx-auto colSpecial">
//   <div class="lg:flex lg:justify-between lg:items-center">
//     <div class="lg:w-1/2 lg:pr-4">
//       <h1 class="text-3xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6">
//         Our Business Services
//       </h1>
//       <p class="mb-4 lg:mb-6">
//         Registering a business can be quite stressful. Worry not! Get expert
//         assistance on how and which business structure to select and start your
//         entrepreneurial journey with a bang!
//       </p>
//     </div>
//     <div class="lg:w-1/2 lg:pl-4">
//       <div class="flex flex-wrap justify-center lg:justify-end">
//         <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mb-2 lg:mb-0 mr-2">
//           All
//         </button>
//         <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mb-2 lg:mb-0 mr-2">
//           Income Tax return
//         </button>
//         <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mb-2 lg:mb-0 mr-2">
//           Company's Registration
//         </button>
//         <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mb-2 lg:mb-0 mr-2">
//           Sales Tax Registration
//         </button>
//         <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mb-2 lg:mb-0 mr-2">
//           Intellectual Property
//         </button>
//         <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mb-2 lg:mb-0">
//           USA services
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//       </div>

//       {services.map((service, index) => (
//         <div key={index} className="neumorphism mt-4 mb-4">
//           <div className="col">
//             <div className="flex justify-between items-center mb-2">
//               <h2 className="text-lg font-bold text-primary ">
//                 {service.title}
//               </h2>
//               <span className="text-green-500 font-semibold">
//                 {service.price}
//               </span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-600">Timeline</span>
//               {/* <span className="text-gray-600">{service.time}</span> */}
//               <ul>
//                 {service.time.split(",").map((req, idx) => (
//                   <li key={idx} className="text-gray-700">
//                     {req.trim()}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mb-2">
//               <span className="text-black">Requirements:</span>
//               <ul>
//                 {service.requirements.split(",").map((req, idx) => (
//                   <li key={idx} className="text-gray-700">
//                     {req.trim()}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex justify-end items-center">
//               <button className="mr-2">
//                 <a
//                   href="https://wa.me/923329296026?text=Hello , I am "
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src="./images/whatsapp.png"
//                     alt="WhatsApp Logo"
//                     className="w-12 h-12"
//                   />
//                 </a>
//               </button>
//               <button>
//                 <a
//                   href="tel:+92-332-9296026"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src="./images/phone-call.png"
//                     alt="phone call Logo"
//                     className="w-10 h-10"
//                   />
//                 </a>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServiceCard;



import React, { useState } from "react";

const ServiceCard = () => {
  const [filter, setFilter] = useState("All");

  const services = [
    {
      title: "NTN Registration – Salaried",
      price: "RS: 400",
      time: "1-2 Working Days",
      requirements:
        "✓ Color copy of CNIC,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address",
      category: "Income Tax return",
    },
    {
      title: "NTN Registration – Business",
      price: "RS: 2500",
      time: "1-2 Working Days",
      requirements:
        "✓ Color copy of CNIC,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address",
      category: "Income Tax return",
    },
    {
      title: "NTN Registration – Partnership or AOP",
      price: "RS: 2500",
      time: "1-2 Working Days",
      requirements:
        "✓ Partnership Deed,✓ Partnership registration certificate,✓ Authorization of principal Officer,✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address",
      category: "Income Tax return",
    },
    {
      title: "NTN Registration – Company",
      price: "RS: 15000",
      time: "2-3 Working Days",
      requirements:
        "✓ Incorporation Certificate,✓ Memorandum & Articles of Association,✓ Partnership registration certificate,✓ Authorization of principal Officer,✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address",
      category: "Income Tax return",
    },
    {
      title: "NTN Registration – NPO",
      price: "RS: 15000",
      time: "2-3 Working Days",
      requirements:
        "✓ NTN of all members,✓ Registration Certificate, ✓ Constitution of NPO,✓ Authorization of principal Officer,✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address,✓ Any other document as required by the concerned authority",
      category: "Income Tax return",
    },
    {
      title: "Quarterly Withholding Statements Tax Filing",
      price: "Minimum Fee: 5000",
      time: "3-4 Working Days",
      requirements:
        "✓ Details of Taxes deducted at source during each quarter,✓ Other information as required",
      category: "Income Tax return",
    },
    {
      title: "Annual Income Tax Filing- Salaried",
      price: "Minimum Fee: 2650",
      time: "4-5 Working Days",
      requirements:
        "✓ Annual Salary certificate,✓ Other Income sources if any, ✓ Annual expense,✓ Details of all owned assets,✓ Investments during the year,✓ Disposals the year,✓ Other inflows/outflows during the year,✓ Other information as required",
      category: "Income Tax return",
    },
    {
      title: "Annual Income Tax Filing- Sole Proprietor",
      price: "Minimum Fee: 5000",
      time: "3-5 Working Days",
      requirements:
        "✓ Annual Accounts,✓ Other Income sources if any, ✓ Annual expense,✓ Details of all owned assets,✓ Investments during the year,✓ Disposals the year,✓ Other inflows/outflows during the year,✓ Other information as required",
      category: "Income Tax return",
    },
    {
      title: "Annual Income Tax Filing- NPO/Charitable Trusts",
      price: "Minimum Fee: 15000",
      time: "5 Working Days",
      requirements:
        "✓ Annual Audited Accounts, ✓ Taxes deducted at source,✓ Other information as required",
      category: "Income Tax return",
    },
    {
      title: "GST Registration",
      price: "Other Than Manufacturer: 15000",
      time: "2-3 Working Days",
      requirements:
        "✓ Bank Account Certificate, ✓ Acquisition Date,✓ Particulars of all branches (if any),✓ Authorization of principal Officer,✓ GPS-tagged photographs of the business premises,✓ Consumer number with the gas and electricity supplier along with pictures of utilities meter,✓ GPS-tagged photographs of machinery and industrial electricity or gas meter installed (Manufacturer only),✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises, ✓ Latest paid electricity bill, ✓ Biometric Verification, ✓ Post Verification (Manufacturer only)",
      category: "Sales Tax Registration",
    },
    {
      title: "GST Registration",
      price: "Manufacturer: 18000",
      time: "2-3 Working Days",
      requirements:
        "✓ Bank Account Certificate, ✓ Acquisition Date,✓ Particulars of all branches (if any),✓ Authorization of principal Officer,✓ GPS-tagged photographs of the business premises,✓ Consumer number with the gas and electricity supplier along with pictures of utilities meter,✓ GPS-tagged photographs of machinery and industrial electricity or gas meter installed (Manufacturer only),✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises, ✓ Latest paid electricity bill, ✓ Biometric Verification, ✓ Post Verification (Manufacturer only)",
      category: "Sales Tax Registration",
    },
    {
      title: "Monthly Federal / Provincial Sales Tax Return Filing",
      price: "Minimum Fee: 5000",
      time: "3-4 Working Days",
      requirements:
        "✓ Copies of Sales Invoices, ✓ Copies of purchases Invoices, ✓ Bank Statements, ✓ Other information as required",
      category: "Sales Tax Registration",
    },
    {
      title: "PST Registration - Individual",
      price: "RS: 15000",
      time: "7-10 Working Days",
      requirements:
        "✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises, ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity, ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer, ✓ Signed Application Form",
      category: "Sales Tax Registration",
    },
    {
      title: "PST Registration - Partnership",
      price: "RS: 15000",
      time: "7-10 Working Days",
      requirements:
        "✓ Partnership Certificate,✓ Partnership deed,✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises, ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity, ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer, ✓ Signed Application Form",
      category: "Sales Tax Registration",
    },
    {
      title: "PST Registration - Company",
      price: "RS: 15000",
      time: "7-10 Working Days",
      requirements:
        "✓ Incorporation Certificate,✓ Memorandum of Association,✓ Articles of Association, ✓ Incorporation Form/ Form A & 29,✓ Color copy of CNIC, ✓ Rent agreement/ownership docs of Office premises, ✓ Letter Head,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address, ✓ Bank Account Certificate, ✓ Acquisition Date- Capacity and Business Activity, ✓ Particulars of all branches (if any), ✓ Authorization of principal Officer, ✓ Signed Application Form",
      category: "Sales Tax Registration",
    },
    {
      title: "Private Limited Company Registration",
      price: "RS: 12000",
      time: "2-3 Working Days",
      requirements:
        "✓ Three Names of the proposed company,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓ NTN of the proposed directors / subscribers,✓ Registered address / correspondence address of the proposed Company,✓ The principal business of the proposed company,✓ Nature of the business activity,✓ Authorized Capital,✓ Paid up capital,✓ Value per share e.g. Rs. 10 - Rs. 50 or Rs. 100 etc,✓ Combination of Shares agreed to be subscribed by each director / subscriber,✓ Name of the Chief Executive of the Proposed Company,✓ Authorization from other subscribers. (For Offline only),✓ Telephone numbers and email ID of all the proposed directors,✓ Name of declarant person,✓ SECP login details of the proposed directors / subscribers (if any)",
      category: "Company's Registration",
    },
    {
      title: "Single Member Company Registration",
      price: "RS: 12000",
      time: "2-3 Working Days",
      requirements:
        "✓ Three Names of the proposed company,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓ NTN of the proposed directors / subscribers,✓ Registered address / correspondence address of the proposed Company,✓ The principal business of the proposed company,✓ Nature of the business activity,✓ Authorized Capital,✓ Paid up capital,✓ Value per share e.g. Rs. 10 - Rs. 50 or Rs. 100 etc,✓ Name of the Chief Executive of the Proposed Company,✓ Authorization from other subscribers. (For Offline only),✓ Telephone numbers and email ID of all the proposed directors,✓ Name of declarant person,✓ SECP login details of the proposed directors / subscribers (if any)",
      category: "Company's Registration",
    },
    {
      title: "Limited Liability Partnership Registration (LLP)",
      price: "RS: 25000",
      time: "7-10 Working Days",
      requirements:
        "✓ Three Names of the proposed company,✓ Neat and Clear Scanned copies of CNIC's of all the proposed Directors / subscribers,✓ Partnership deeds duly executed,✓ NTN of the proposed directors / subscribers,✓ Registered address / correspondence address of the proposed Company,✓ The principal business of the proposed company,✓ Nature of the business activity,✓ Authorized Capital,✓ Paid up capital,✓ Value per share e.g. Rs. 10 - Rs. 50 or Rs. 100 etc,✓ Combination of Shares agreed to be subscribed by each director / subscriber,✓ Name of the Chief Executive of the Proposed Company,✓ Authorization from other subscribers. (For Offline only),✓ Telephone numbers and email ID of all the proposed directors,✓ Name of declarant person,✓ SECP login details of the proposed directors / subscribers (if any)",
      category: "Company's Registration",
    },
    {
      title: "Partnership or AOP Registration",
      price: "RS: 25000",
      time: "5-7 Working Days",
      requirements:
        "✓ Partnership Deed,✓ Signed Partnership Form,✓ Authorization of principal Officer,✓ Color copy of CNIC's of Partners,✓ Rent agreement/ownership docs of Office premises,✓ Letterhead,✓ Latest paid electricity bill,✓ Phone Number,✓ Email address",
      category: "Company's Registration",
    },
    {
      title: "Trademark Registration",
      price: "RS: 70000",
      time: "      ",
      requirements:
        "✓ TM-1 in duplicate,✓ Six representations affixed on a durable paper of 13x8 inch,✓ CNIC of the Trademark Holder/partners,✓ Color copy of CNIC's of Partners,✓ Specification of goods or services sought to be protected in any class,✓ Residential address of holder or Letterhead of the Business,✓ Other Information or Documents as required",
      category: "Intellectual Property",
    },
    {
      title: "Copyright Registration",
      price: "RS: 70000",
      time: "      ",
      requirements:
        "✓ Two Copies of work,✓ Demand Draft / Pay order of fee as applicable per work,✓ CNIC of the Copyrights Holder / partners,✓ NOC from publisher if work has been published and publisher is different from applicant,✓ Search certificate from trademark Office if the work is capable of being used on goods,✓ Power of attorney,✓ Other Information or Documents as required",
      category: "Intellectual Property",
    },
    {
      title: "Patent Registration",
      price: "RS: 150000",
      time: "      ",
      requirements:
        "✓ Form P - 1 or Form P - 1A application without priority,✓ Form P - 2 or Form P - 2A application with priority,✓ Form P- 3 for provisional or Form P- 3A for complete specification,✓ Patent Specification,✓ Drawing(s) - if any,✓ Demand Draft / Pay order of fee as applicable per work,✓ Form P - 28 (power of Attorney) if any,✓ Priority document (for convention application),✓ CNIC of the Copyrights applicant,✓ Other Information or Documents as required",
      category: "Intellectual Property",
    },
    {
      title: "Company Formation in USA - LLC / Inc. (C Corp)",
      price: "State fee $120",
      time: "3 Business Days",
      requirements:
        "✓ 2 Suggested Names of the Company, ✓ CNIC (English Only) / Passport of Director(s)",
      category: "USA services",
    },
    {
      title: "Employer Identification Number (EIN)",
      price: "$150",
      time: "30 Business Days",
      requirements:
        "✓ Article of Organization, ✓ Certificate of Organization",
      category: "USA services",
    },
    {
      title: "Open A US Bank Account",
      price: "$100",
      time: "30 Business Days",
      requirements:
        "✓ Article of Organization, ✓ Certificate of Organization, ✓ CNIC (English Only) / Passport of Director(s), ✓ EIN",
      category: "USA services",
    },
    {
      title: "USA Company Formation - Complete Package",
      price: "$100",
      time:
        "Company Formation: 3 Business Days, EIN: 30 Business days Account: Business Days after EIN, Bank Account: 30 Business Days after EIN",
      requirements:
        "✓ 2 Suggested Names of the Company, ✓ CNIC (English Only) / Passport of Director(s)",
      category: "USA services",
    },
    {
      title: "Tax Filing - State: LLC / Inc. (C Corp)",
      price: "$200",
      time: "3 Business Days",
      requirements:
        "✓ Financial Statements, ✓ Last Year's Tax Return- if applicable",
      category: "USA services",
    },
    {
      title: "Tax Filing - Federal: LLC / Inc. (C Corp)",
      price: "$200",
      time: "3 Business Days",
      requirements:
        "✓ Financial Statements, ✓ Last Year's Tax Return- if applicable",
      category: "USA services",
    },
  ];
  
  const categories = [
    "All",
    "Income Tax return",
    "Company's Registration",
    "Sales Tax Registration",
    "Intellectual Property",
    "USA services",
  ];

  const filteredServices =
    filter === "All"
      ? services
      : services.filter((service) => service.category === filter);

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pb-12">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:justify-between lg:items-center mb-6">
          <div className="lg:w-1/2 lg:pr-6">
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-3 text-white">
              Our Business Services
            </h1>
            <p className="text-gray-300 max-w-xl">
              Registering a business can be stressful. Get expert assistance on
              which structure to select and start your entrepreneurial journey
              with confidence.
            </p>
          </div>
            <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
            <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all text-sm ${
                    filter === category
                      ? "bg-gradient-to-r from-emerald-400 to-indigo-500 text-black shadow-lg"
                      : "bg-white/6 hover:bg-white/12 text-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/4 backdrop-blur rounded-xl p-5 shadow-lg border border-white/6 flex flex-col justify-between hover:scale-[1.01] transition-transform"
            >
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-bold text-white">{service.title}</h2>
                  <span className="text-emerald-300 font-semibold">
                    {service.price}
                  </span>
                </div>

                <div className="mt-3 text-sm text-gray-200">
                  <div className="font-medium text-gray-200">Timeline</div>
                  <ul className="list-disc list-inside mt-1">
                    {service.time
                      .split(",")
                      .map((req, idx) => (
                        <li key={idx}>{req.trim()}</li>
                      ))}
                  </ul>
                </div>

                <div className="mt-3 text-sm text-gray-300">
                  <div className="font-medium text-gray-200">Requirements</div>
                  <ul className="list-disc list-inside mt-1">
                    {service.requirements
                      .split(",")
                      .map((req, idx) => (
                        <li key={idx}>{req.trim()}</li>
                      ))}
                  </ul>
                </div>
              </div>

        <div className="mt-4 flex items-center justify-end gap-3">
                <a
                  href="https://wa.me/923180481998?text=Hello , I am "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emerald-400 hover:from-emerald-400 hover:to-indigo-500 transition-shadow shadow-md"
                >
                  <img src="/images/whatsapp.png" alt="whatsapp" className="w-6 h-6" />
                </a>

                <a
                  href="tel:+92-318-0481998"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-shadow shadow-md"
                >
                  <img src="/images/phone-call.png" alt="call" className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
