import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Investments(){

    const [activeButton, setActiveButton] = useState("fiatInvestments"); // Default active button
  const incomeNavigation = useNavigate();

  const handleButtonClick = (route) => {
    setActiveButton(route); // Update active button state
    incomeNavigation(route); // Navigate to the respective route
  };

  return (
    <div className="w-full h-auto flex flex-row justify-stretch items-center gap-2 px-[4rem]">
      <button
        className={`nav-button w-full h-16 text-gray-500 font-medium whitespace-nowrap px-20 py-4 outline-none bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "fiatInvestments" ? "active" : ""}`}
        onClick={() => handleButtonClick("fiatInvestments")}
      >
        Fiat Investments
      </button>
      <button
        className={`nav-button w-full h-16 text-gray-500 font-medium whitespace-nowrap px-20 py-4 outline-none bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "cryptoInvestments" ? "active" : ""}`}
        onClick={() => handleButtonClick("cryptoInvestments")}
      >
        Crypto Investments
      </button>
      <button
        className={`nav-button w-full h-16 text-gray-500 font-medium whitespace-nowrap px-20 py-4 outline-none bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "totalInvestments" ? "active" : ""}`}
        onClick={() => handleButtonClick("totalInvestments")}
      >
        Total Investments
      </button>
    </div>
  );
}