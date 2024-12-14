import { useState } from "react";
import smsFilterIcon from "../assets/sms-filter.svg";
import { IoChevronDown } from "react-icons/io5";

export default function SMSFilterDropdown() {
    const [selectedOption, setSelectedOption] = useState("All Notifications");
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { label: "All Notifications", value: "all" },
        { label: "Salary Received", value: "transactions" },
        { label: "Withdrawals", value: "offers" },
        { label: "Stocks", value: "reminders" },
    ];

    return (
        <div className="relative w-full max-w-[12rem]">
            {/* Label */}
            <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-1">
                <img src={smsFilterIcon} alt="Filter" className="w-6 h-6" />
                Filter SMS
            </label>
            {/* Button */}
            <button
                type="button"
                className="w-full bg-white text-sm font-medium text-gray-700 py-2 px-3 rounded-lg shadow-sm ring-1 ring-gray-300 hover:ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption}
                <IoChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            {/* Dropdown */}
            {isOpen && (
                <ul className="absolute w-full mt-2 bg-white rounded-lg shadow-md ring-1 ring-gray-300 z-10 max-h-60 overflow-y-auto">
                    {options.map(option => (
                        <li
                            key={option.value}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                setSelectedOption(option.label);
                                setIsOpen(false); // Close dropdown
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
