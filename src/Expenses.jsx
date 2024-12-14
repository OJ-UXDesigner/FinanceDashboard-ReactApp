import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Expenses(){

    const [activeButton, setActiveButton] = useState("fiatExpenses"); // Default active button
  const incomeNavigation = useNavigate();

  const handleButtonClick = (route) => {
    setActiveButton(route); // Update active button state
    incomeNavigation(route); // Navigate to the respective route
  };

  return (
    <div className="w-full h-auto flex flex-row justify-stretch items-center gap-2 px-[4rem]">
      <button
        className={`nav-button w-full h-16 text-gray-500 font-medium whitespace-nowrap px-20 py-4 outline-none bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "fiatExpenses" ? "active" : ""}`}
        onClick={() => handleButtonClick("fiatExpenses")}
      >
        Fiat Expenses
      </button>
      <button
        className={`nav-button w-full h-16 text-gray-500 font-medium whitespace-nowrap px-20 py-4 outline-none bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "cryptoExpenses" ? "active" : ""}`}
        onClick={() => handleButtonClick("cryptoExpenses")}
      >
        Crypto Expenses
      </button>
      <button
        className={`nav-button w-full h-16 text-gray-500 font-medium whitespace-nowrap px-20 py-4 outline-none bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "totalExpenses" ? "active" : ""}`}
        onClick={() => handleButtonClick("totalExpenses")}
      >
        Total Expenses
      </button>
    </div>
  );
}