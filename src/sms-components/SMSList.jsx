import PropTypes from "prop-types";
import { MdDeleteOutline } from "react-icons/md";
import { PiCoinsThin } from "react-icons/pi";
import { GoArrowDownRight } from "react-icons/go";
import { PiChartBar } from "react-icons/pi";

const iconMap = {
    Salary: <PiCoinsThin className="h-6 w-6 text-[#00B658]" />,
    Withdrawal: <GoArrowDownRight className="h-6 w-6 text-[#F76C5E]" />,
    Stocks: <PiChartBar className="h-6 w-6 text-[#7936CA]" />
};

const iconBgMap = {
    Salary: "bg-[#00B658]/10",
    Withdrawal: "bg-[#F76C5E]/10",
    Stocks: "bg-[#7936CA]/10"
};

export default function SMSList({ type, message, date }) {
    return (
        <div className="sms-item w-full flex flex-row justify-between items-center p-2">
            <div className="sms-icon-and-message w-full h-auto flex flex-row justify-start items-start gap-2">
                <div className={`sms-icon p-2 rounded-full ${iconBgMap[type]}`}>
                    {iconMap[type]}
                </div>
                <div className="sms-info flex flex-col ml-2">
                    <h1 className="text-[#67686a] text-[14px] font-semibold">{type}</h1>
                    <p className="text-[#0e0e0f] text-[16px]">{message}</p>
                    <p className="text-[#6b7280] text-[12px]">{date}</p>
                </div>
            </div>
            <button className="text-[#868686] hover:text-red-500">
                <MdDeleteOutline className="h-6 w-6" />
            </button>
        </div>
    );
}

// PropTypes validation
SMSList.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};