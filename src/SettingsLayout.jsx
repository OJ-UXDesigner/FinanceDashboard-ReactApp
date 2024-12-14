import { Outlet } from "react-router-dom";
import Settings from "./Settings.jsx";
import SettingsHeader from "./settings-components/SettingsHeader.jsx";

export default function SettingsLayout(){
    return(
        <div className="px-[4rem] w-full h-auto flex flex-col justify-start items-start gap-4">
            <SettingsHeader />
            <div className="settings-main-container w-full h-auto flex flex-row gap-2 border border-[#cccccc] rounded-lg bg-gray-50">
                <Settings />
                <Outlet />
            </div>
        </div>
        
    )
}