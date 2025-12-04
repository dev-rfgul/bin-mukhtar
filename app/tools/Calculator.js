
import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Calculator() {
  // const notify = () => toast.success("Tax calculation completed successfully!");

  const [monthlySalary, setMonthlySalary] = useState("");
  const [annualSalary, setAnnualSalary] = useState("");
  const [monthlyTax, setMonthlyTax] = useState("");
  const [annualTax, setAnnualTax] = useState("");



  // Format number with commas for thousands
  const formatNumber = (num) => {
    if (!num) return "";
    return parseFloat(num).toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const handleMonthlySalaryChange = (e) => {
    // Allow only numbers and decimal point
    const value = e.target.value.replace(/[^\d.]/g, '');
    setMonthlySalary(value);
  };

  const calculateSalariedTax = () => {
    const monthlySalaryFloat = parseFloat(monthlySalary);
    if (isNaN(monthlySalaryFloat) || monthlySalaryFloat <= 0) {
      toast.error("Please enter a valid salary amount.");
      return;
    }

    const monthlyTaxFloat = calculateMonthlyTax(monthlySalaryFloat);
    const annualTaxFloat = monthlyTaxFloat * 12;

    setAnnualSalary((monthlySalaryFloat * 12).toFixed(2));
    setAnnualTax(annualTaxFloat.toFixed(2));
    setMonthlyTax(monthlyTaxFloat.toFixed(2));
    // notify();
  };

  const calculateMonthlyTax = (monthlySalary) => {
    let taxAmount = 0;

    if (monthlySalary <= 50000) {
      taxAmount = 0;
    } else if (50000 < monthlySalary && monthlySalary <= 100000) {
      taxAmount = 0.025 * (monthlySalary - 50000);
    } else if (100000 < monthlySalary && monthlySalary <= 200000) {
      taxAmount = 1250 + 0.125 * (monthlySalary - 100000);
    } else if (200000 < monthlySalary && monthlySalary <= 300000) {
      taxAmount = 13750 + 0.225 * (monthlySalary - 200000);
    } else if (300000 < monthlySalary && monthlySalary <= 500000) {
      taxAmount = 36250 + 0.275 * (monthlySalary - 300000);
    } else if (500000 < monthlySalary && monthlySalary <= 1000000) {
      taxAmount = 91250 + 0.35 * (monthlySalary - 500000);
    } else {
      taxAmount = 188750 + 0.35 * (monthlySalary - 1000000);
    }
    return taxAmount;
  };

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur rounded-xl p-6 md:p-8 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-white">Income Tax Calculator</h1>
          <p className="text-gray-300 text-sm mb-6">Calculate your income tax for salaried individuals in Pakistan</p>

          <div className="w-full mb-6">
            <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="monthlySalary">
              Monthly Gross Salary (PKR)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">Rs.</span>
              <input
                id="monthlySalary"
                className="w-full rounded-lg border border-white/20 bg-white/10 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                type="text"
                value={monthlySalary}
                onChange={handleMonthlySalaryChange}
                placeholder="75,000"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">Enter your monthly salary to calculate tax liability</p>
          </div>

          <div className="flex justify-center">
            <button
              className="w-full md:w-auto px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
              onClick={() => {
                // autoScroll();
                calculateSalariedTax();
              }}
            >
              Calculate Tax
            </button>
          </div>

          {/* <ToastContainer position="top-center" autoClose={3000} /> */}
        </div>

        {(monthlyTax || annualTax) && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">Monthly Breakdown</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Gross Salary:</span>
                  <span className="font-semibold text-white">Rs. {formatNumber(monthlySalary)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Tax Deduction:</span>
                  <span className="font-semibold text-red-400">Rs. {formatNumber(monthlyTax)}</span>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-100 font-medium">Net Salary:</span>
                    <span className="font-bold text-emerald-400 text-lg">Rs. {formatNumber((monthlySalary - monthlyTax).toFixed(2))}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">Annual Projection</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Gross Salary:</span>
                  <span className="font-semibold text-white">Rs. {formatNumber(annualSalary)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Tax Deduction:</span>
                  <span className="font-semibold text-red-400">Rs. {formatNumber(annualTax)}</span>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-100 font-medium">Net Salary:</span>
                    <span className="font-bold text-emerald-400 text-lg">Rs. {formatNumber((annualSalary - annualTax).toFixed(2))}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!monthlyTax && !annualTax && (
          <div className="mt-8 max-w-3xl mx-auto bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">How to Use</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Enter your monthly gross salary in Pakistani Rupees (PKR)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Click "Calculate Tax" to see your monthly and annual tax breakdown</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Tax calculations are based on current Pakistani income tax slabs for salaried individuals</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
