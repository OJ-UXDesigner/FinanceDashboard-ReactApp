import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function TotalAmountList({ amountNumber, amountDate }) {
    return (
        <div className="amount-list w-full h-auto flex flex-row justify-between items-center p-4">
            <div className="left-amount-list flex flex-col">
                <div className="amount-number">
                <h1 className="text-[1.25rem] font-[500] leading-6">{amountNumber}</h1>
                </div>
                <div className="amount-date">
                <p className="text-[#868686] font-[500] text-base">{amountDate}</p>
                </div>
            </div>
            <div className="right-left-amount-list">
                <Link className="text-[#868686] hover:underline hover:text-[#3A3A3A] hover:font-semibold">See Details</Link>
            </div>
        </div>
    );
}

// PropTypes validation
TotalAmountList.propTypes = {
    amountNumber: PropTypes.number.isRequired, // Ensures amountNumber is a required number
    amountDate: PropTypes.string.isRequired,  // Ensures amountDate is a required string
};
