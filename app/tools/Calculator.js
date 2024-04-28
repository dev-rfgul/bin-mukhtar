import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Calculator() {
  const notify = () => toast("Your tax has been calculated!");

  const [monthlySalary, setMonthlySalary] = useState("");
  const [annualSalary, setAnnualSalary] = useState("");
  const [monthlyTax, setMonthlyTax] = useState("");
  const [annualTax, setAnnualTax] = useState("");

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
      taxAmount = 18875 + 0.35 * (monthlySalary - 1000000);
    }
    return taxAmount;
  };

  return (
    <div className=" container mx-auto px-4 py-8">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-semibold mb-4">Tax Calculator</h1>
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 active:bg-slate-800 text-white font-bold py-2 px-4 rounded"
            onClick={calculateSalariedTax}
          >
            Salaried Person
          </button>
{/* 
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Business Person
          </button> */}
        </div>
        <div className="w-full max-w-md px-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="monthlySalary"
          >
            Enter Monthly Salary:
          </label>
          <input
            id="monthlySalary"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={monthlySalary}
            onChange={handleMonthlySalaryChange}
            placeholder="Enter monthly salary"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
          onClick={calculateSalariedTax}
        >
          Calculate
        </button>
        <ToastContainer />
      </div>

      <div className="neumorphism mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Details</h2>
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Monthly Salary:</span>
              <span>{monthlySalary}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Monthly Tax:</span>
              <span>{monthlyTax}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Salary After Tax:</span>
              <span>{(monthlySalary - monthlyTax).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Details</h2>
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Annual Salary:</span>
              <span>{annualSalary}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Annual Tax:</span>
              <span>{annualTax}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Salary After Tax:</span>
              <span>{(annualSalary - annualTax).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
