import PropTypes from "prop-types";

export default function IntegBankAccount({ bankName, accountNumber }) {
    return (
        <div className="bg-white w-full p-4 border-[0.2px] border-[#dfdfdf] rounded-tr-lg rounded-lg shadow-md">
            <div className="mb-4">
                <label className="text-[#3a3a3a] text-sm">Bank Name: </label>
                <p className="text-gray-700 font-semibold">{bankName}</p>
            </div>
            <div className="mb-4">
                <label className="text-[#3a3a3a] text-sm">Account Number: </label>
                <p className=" text-gray-700 font-semibold">{accountNumber}</p>
            </div>
            <button className="border border-red-500 text-red-500 py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition duration-300">
                Disconnect
            </button>
        </div>
    );
}

// PropTypes validation
IntegBankAccount.propTypes = {
    bankName: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
};