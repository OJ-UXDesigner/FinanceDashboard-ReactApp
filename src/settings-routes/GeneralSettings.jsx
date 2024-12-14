import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function GeneralSettings() {
    const [darkMode, setDarkMode] = useState(false);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [displayLanguage, setDisplayLanguage] = useState("English");
    const [defaultCurrency, setDefaultCurrency] = useState("USD");
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

    const languageOptions = ["English", "Arabic", "Spanish", "French"];
    const currencyOptions = ["USD", "SAR", "EUR", "GBP"];

    return (
        <div className="bg-white w-full p-8 border-l-[0.2px] border-[#dfdfdf] rounded-tr-lg rounded-br-lg">
            <h1 className="text-2xl font-semibold text-[#3a3a3a]">General Settings</h1>
            <p className="text-gray-600 mb-4">Update your general settings</p>
            <hr className="mb-4" />
            
            <div className="flex items-center justify-between mb-4">
                <label className="text-gray-700">Enable dark mode</label>
                <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
                    <input 
                        type="checkbox" 
                        checked={darkMode} 
                        onChange={() => setDarkMode(!darkMode)} 
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        style={{ borderColor: darkMode ? "#3A3A3A" : "#ccc", left: darkMode ? "1.5rem" : "0" }}
                    />
                    <label 
                        className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${darkMode ? "bg-[#3A3A3A]" : ""}`}
                        onClick={() => setDarkMode(!darkMode)}
                    ></label>
                </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
                <label className="text-gray-700">Enable SMS Notifications</label>
                <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
                    <input 
                        type="checkbox" 
                        checked={smsNotifications} 
                        onChange={() => setSmsNotifications(!smsNotifications)} 
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        style={{ borderColor: smsNotifications ? "#3A3A3A" : "#ccc", left: smsNotifications ? "1.5rem" : "0" }}
                    />
                    <label 
                        className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${smsNotifications ? "bg-[#3A3A3A]" : ""}`}
                        onClick={() => setSmsNotifications(!smsNotifications)}
                    ></label>
                </div>
            </div>
            
            <div className="relative w-full max-w-[12rem] mb-4">
                <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-1">
                    Select display language
                </label>
                <button
                    type="button"
                    className="w-full bg-white text-sm font-medium text-gray-700 py-2 px-3 rounded-lg shadow-sm ring-1 ring-gray-300 hover:ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 flex justify-between items-center"
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                    {displayLanguage}
                    <IoChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {isLanguageOpen && (
                    <ul className="absolute w-full mt-2 bg-white rounded-lg shadow-md ring-1 ring-gray-300 z-10 max-h-60 overflow-y-auto">
                        {languageOptions.map(option => (
                            <li
                                key={option}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                    setDisplayLanguage(option);
                                    setIsLanguageOpen(false); // Close dropdown
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
            <div className="relative w-full max-w-[12rem] mb-4">
                <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-1">
                    Choose default currency
                </label>
                <button
                    type="button"
                    className="w-full bg-white text-sm font-medium text-gray-700 py-2 px-3 rounded-lg shadow-sm ring-1 ring-gray-300 hover:ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 flex justify-between items-center"
                    onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                >
                    {defaultCurrency}
                    <IoChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {isCurrencyOpen && (
                    <ul className="absolute w-full mt-2 bg-white rounded-lg shadow-md ring-1 ring-gray-300 z-10 max-h-60 overflow-y-auto">
                        {currencyOptions.map(option => (
                            <li
                                key={option}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                    setDefaultCurrency(option);
                                    setIsCurrencyOpen(false); // Close dropdown
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
            <button className="w-full bg-[#3A3A3A] text-white py-2 rounded-md hover:bg-[#555] transition duration-300 mt-8">
                Save Changes
            </button>
        </div>
    );
}