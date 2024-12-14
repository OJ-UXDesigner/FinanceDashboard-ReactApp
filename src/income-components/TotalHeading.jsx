import PropTypes from "prop-types"
export default function TotalHeading({amountTitle, amountNumber}){
    return(
        <div className="amount-title-container w-full h-auto flex flex-row justify-between items-center bg-gray-50 p-8 rounded-md">
            <div className="left-amount-title-container">
                <h1 className="text-gray-700 text-4xl font-medium leading-12 tracking-tight whitespace-nowrap">{amountTitle}</h1>
            </div>
            <div className="right-amount-title-container w-full h-auto flex flex-row justify-end items-center gap-2">
                <h1 className="text-[#F76C5E] text-4xl font-medium leading-12 tracking-tighter whitespace-nowrap">{amountNumber}</h1>
                <select name="currency" id="" className="bg-gray-50">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="ngn">NGN</option>
                </select>
            </div>
        </div>
    )
}

// PropTypes validation
TotalHeading.propTypes = {
    amountTitle: PropTypes.string.isRequired,
    amountNumber: PropTypes.number.isRequired
}
