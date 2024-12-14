import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSettings, MdAccountCircle, MdIntegrationInstructions } from "react-icons/md";

export default function Settings() {
  const [activeButton, setActiveButton] = useState("generalSettings"); // Default active button
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    setActiveButton(route); // Update active button state
    navigate(route); // Navigate to the respective route
  };

  return (
    <div>
      <div className="w-full h-auto flex flex-col justify-start items-start gap-4 p-4">
        <button
          className={`nav-button w-full h-12 text-gray-500 font-medium flex items-center gap-2 px-4 py-2 outline-none whitespace-nowrap bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "generalSettings" ? "active" : ""}`}
          onClick={() => handleButtonClick("generalSettings")}
        >
          <MdSettings className="h-5 w-5" />
          General Settings
        </button>
        <button
          className={`nav-button w-full h-12 text-gray-500 font-medium flex items-center gap-2 px-4 py-2 outline-none whitespace-nowrap bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "accountSettings" ? "active" : ""}`}
          onClick={() => handleButtonClick("accountSettings")}
        >
          <MdAccountCircle className="h-5 w-5" />
          Account Settings
        </button>
        <button
          className={`nav-button w-full h-12 text-gray-500 font-medium flex items-center gap-2 px-4 py-2 outline-none whitespace-nowrap bg-transparent border-none rounded-md transition-all duration-300 ease-in-out ${activeButton === "integrationsSettings" ? "active" : ""}`}
          onClick={() => handleButtonClick("integrationsSettings")}
        >
          <MdIntegrationInstructions className="h-5 w-5" />
          Integrations Settings
        </button>
      </div>
    </div>
  );
}