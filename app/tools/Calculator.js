
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Calculator() {
  const notify = () => toast("Your tax has been calculated!");

  const [monthlySalary, setMonthlySalary] = useState("");
  const [annualSalary, setAnnualSalary] = useState("");
  const [monthlyTax, setMonthlyTax] = useState("");
  const [annualTax, setAnnualTax] = useState("");

  const autoScroll = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth", // Optional: makes the scroll smooth
    });
  };

  const handleMonthlySalaryChange = (e) => {
    setMonthlySalary(e.target.value);
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
    notify();
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
    <div className="pt-24 md:pt-28 lg:pt-32  min-h-screen text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur rounded-xl p-6 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">Tax Calculator</h1>

          <div className="mb-4 flex gap-3">
            <button
              className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 text-black font-semibold shadow-md"
              onClick={calculateSalariedTax}
            >
              Salaried Person
            </button>
          </div>

          <div className="w-full">
            <label className="block text-black-200 text-sm font-medium mb-2" htmlFor="monthlySalary">
              Enter Monthly Salary
            </label>
            <input
              id="monthlySalary"
              className="w-full rounded-md border border-white/10 bg-white/3 py-2 px-3 text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              type="text"
              value={monthlySalary}
              onChange={handleMonthlySalaryChange}
              placeholder="e.g. 75000"
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
              onClick={() => {
                autoScroll();
                calculateSalariedTax();
              }}
            >
              Calculate
            </button>
          </div>

          <ToastContainer />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur rounded-xl p-4">
            <h2 className="text-lg font-semibold text-white mb-3">Monthly Details</h2>
            <div className="space-y-2 text-gray-200">
              <div className="flex justify-between">
                <span className="font-medium">Monthly Salary:</span>
                <span>{monthlySalary}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Monthly Tax:</span>
                <span>{monthlyTax}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Salary After Tax:</span>
                <span>{monthlySalary ? (monthlySalary - monthlyTax).toFixed(2) : ""}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-xl p-4">
            <h2 className="text-lg font-semibold text-white mb-3">Annual Details</h2>
            <div className="space-y-2 text-gray-200">
              <div className="flex justify-between">
                <span className="font-medium">Annual Salary:</span>
                <span>{annualSalary}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Annual Tax:</span>
                <span>{annualTax}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Salary After Tax:</span>
                <span>{annualSalary ? (annualSalary - annualTax).toFixed(2) : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
