import { useState } from "react";
import { MdEdit } from "react-icons/md";
import avatar from "../assets/avatar.jpg";

export default function AccountSettings() {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    return (
        <div className="bg-white w-full p-8 border-l-[0.2px] border-[#dfdfdf] rounded-tr-lg rounded-br-lg">
            <h1 className="text-2xl font-semibold text-[#3a3a3a]">Account Settings</h1>
            <p className="text-gray-600 mb-4">Update your personal information</p>
            <hr className="mb-4" />
            
            <div className="flex items-center justify-between mb-4">
                <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
                <a href="#" className="text-[#868686] hover:underline hover:text-[#3A3A3A] hover:font-semibold text-[14px] flex items-center gap-1">
                    <MdEdit className="w-4 h-4" />
                    Change avatar
                </a>
            </div>
            
            <div className="flex items-center justify-between mb-4">
                <div>
                    <label className="text-[#4b5563] text-sm">Username</label>
                    <p className="text-[#3a3a3a] font-medium">OJ-UXDesigner</p>
                </div>
                <a href="#" className="text-[#868686] hover:underline hover:text-[#3A3A3A] hover:font-semibold text-[14px] flex items-center gap-1">
                    <MdEdit className="w-4 h-4" />
                    Change Username
                </a>
            </div>
            
            <div className="flex items-center justify-between mb-4">
                <div>
                    <label className="text-[#4b5563] text-sm">Email Address</label>
                    <p className="text-[#3a3a3a] font-medium">oj-uxdesigner@email.com</p>
                </div>
                <a href="#" className="text-[#868686] hover:underline hover:text-[#3A3A3A] hover:font-semibold text-[14px] flex items-center gap-1">
                    <MdEdit className="w-4 h-4" />
                    Change Email Address
                </a>
            </div>
            
            <div className="flex items-center justify-between mb-4">
                <div>
                    <label className="text-[#4b5563] text-sm">Password</label>
                    <p className="text-[#3a3a3a] font-medium">***********</p>
                </div>
                <a href="#" className="text-[#868686] hover:underline hover:text-[#3A3A3A] hover:font-semibold text-[14px] flex items-center gap-1">
                    <MdEdit className="w-4 h-4" />
                    Change Password
                </a>
            </div>
            
            <div className="flex items-center justify-between mb-4">
                <label className="text-gray-700">Enable Two-Factor Authentication</label>
                <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
                    <input 
                        type="checkbox" 
                        checked={twoFactorAuth} 
                        onChange={() => setTwoFactorAuth(!twoFactorAuth)} 
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        style={{ borderColor: twoFactorAuth ? "#3A3A3A" : "#ccc", left: twoFactorAuth ? "1.5rem" : "0" }}
                    />
                    <label 
                        className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${twoFactorAuth ? "bg-[#3A3A3A]" : ""}`}
                        onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                    ></label>
                </div>
            </div>
            
            <button className="w-full bg-[#3A3A3A] text-white py-2 rounded-md hover:bg-[#555] transition duration-300 mt-8">
                Save Changes
            </button>
        </div>
    );
}
