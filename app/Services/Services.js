import React, { useState } from "react";

const ServiceCard = () => {
  const [filter, setFilter] = useState("All");
  const [expandedCards, setExpandedCards] = useState({});

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

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getRequirementsDisplay = (requirements, index, isExpanded) => {
    const reqArray = requirements.split(",").map((req) => req.trim());
    const maxVisible = 4;

    if (reqArray.length <= maxVisible) {
      return reqArray;
    }

    return isExpanded ? reqArray : reqArray.slice(0, maxVisible);
  };

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 pb-12   ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="lg:flex lg:justify-between lg:items-start mb-8">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-white">
              Our Business Services
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Professional tax and business consulting services tailored to your needs.
              Expert assistance for all your regulatory and compliance requirements.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
            <div className="flex flex-wrap justify-center lg:justify-end gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm border-2 ${
                    filter === category
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isExpanded = expandedCards[index];
            const reqArray = service.requirements.split(",").map((req) => req.trim());
            const displayedReqs = getRequirementsDisplay(
              service.requirements,
              index,
              isExpanded
            );
            const hasMoreReqs = reqArray.length > 4;

            return (
              <div
                key={index}
                className="bg-white/4 backdrop-blur rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col transition-shadow duration-200 hover:shadow-md"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-white flex-1 pr-3 leading-tight">
                    {service.title}
                  </h2>
                  <span className="text-emerald-600 font-bold text-base whitespace-nowrap">
                    {service.price}
                  </span>
                </div>

                {/* Timeline Section */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wide mb-2">
                    Timeline
                  </div>
                  <div className="text-sm text-white">
                    {service.time.split(",").map((time, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-slate-400 mr-2">•</span>
                        <span>{time.trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements Section */}
                <div className="mb-4 flex-1">
                  <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wide mb-2">
                    Requirements
                  </div>
                  <ul className="space-y-1.5 text-sm text-white">
                    {displayedReqs.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-emerald-500 mr-2 flex-shrink-0">✓</span>
                        <span>{req.replace(/^✓\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Show More/Less Button */}
                  {hasMoreReqs && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-3 text-sm font-medium text-emerald-600 hover:text-slate-900 transition-colors"
                    >
                      {isExpanded
                        ? "Show less"
                        : `Show all (${reqArray.length - 4} more)`}
                    </button>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <a
                    href="https://wa.me/923180481998?text=Hello, I am interested in your services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors shadow-sm"
                    title="Contact via WhatsApp"
                  >
                    <img
                      src="/images/whatsapp.png"
                      alt="WhatsApp"
                      className="w-5 h-5 brightness-0 invert"
                    />
                  </a>

                  <a
                    href="tel:+92-318-0481998"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-800 transition-colors shadow-sm"
                    title="Call us"
                  >
                    <img
                      src="/images/phone-call.png"
                      alt="Call"
                      className="w-5 h-5 brightness-0 invert"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
