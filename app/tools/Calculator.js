import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Calculator() {
  const notify = () => toast("Your Annual tax is",{annualTax});

  const [monthlySalary, setMonthlySalary] = useState("");
  const [annualSalary, setAnnualSalary] = useState("");
  const [monthlyTax, setMonthlyTax] = useState("");
  const [annualTax, setAnnualTax] = useState("");

  const handleMonthlySalaryChange = (e) => {
    setMonthlySalary(e.target.value);
  };

  const calculateTax = () => {
    const monthlySalaryFloat = parseFloat(monthlySalary);
    if (!isNaN(monthlySalaryFloat)) {
      const annualSalaryFloat = monthlySalaryFloat * 12;
      const annualTaxFloat = calculateAnnualTax(monthlySalaryFloat);
      const monthlyTaxFloat = annualTaxFloat / 12;

      setAnnualSalary((monthlySalaryFloat * 12).toFixed(2));
      setAnnualTax(annualTaxFloat.toFixed(2));
      setMonthlyTax(monthlyTaxFloat.toFixed(2));
    }
  };

  const calculateAnnualTax = (monthlySalary) => {
    let taxAmount = 0;

    if (monthlySalary > 50000) {
      const annualSalary = monthlySalary * 12;

      if (monthlySalary <= 350000) {
        taxAmount = annualSalary * 0.015; // 1.5% tax for salary between 50,000 and 3.5 lac
      } else if (monthlySalary <= 600000) {
        taxAmount = 5250 + (monthlySalary - 350000) * 0.015; // 5,250 fixed + 1.5% tax for salary between 3.5 lac and 6 lac
      } else {
        taxAmount = 5250 + 3750 + (monthlySalary - 600000) * 0.03; // 5,250 fixed + 3% extra tax for salary above 6 lac
      }
    }

    return taxAmount;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-semibold mb-4">Tax Calculator</h1>
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
          onClick={() => {
            calculateTax();
            notify();
          }}    
        >
          Calculate
        </button>
        <ToastContainer />
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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
