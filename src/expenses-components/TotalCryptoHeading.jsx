import PropTypes from "prop-types"
export default function TotalCryptoHeading({amountTitle, amountNumber}){
    return(
        <div className="amount-title-container w-full h-auto flex flex-row justify-between items-center bg-gray-50 p-8 rounded-md">
            <div className="left-amount-title-container">
                <h1 className="text-gray-700 text-4xl font-medium leading-12 tracking-tight whitespace-nowrap">{amountTitle}</h1>
            </div>
            <div className="right-amount-title-container w-full h-auto flex flex-row justify-end items-center gap-2">
                <h1 className="text-[#7936CA] text-4xl font-medium leading-12 tracking-tighter whitespace-nowrap">{amountNumber}</h1>
                <select name="currency" id="" className="bg-gray-50">
                    <option value="usd">BTC</option>
                    <option value="eur">ETH</option>
                    <option value="ngn">LTC</option>
                </select>
            </div>
        </div>
    )
}

// PropTypes validation
TotalCryptoHeading.propTypes = {
    amountTitle: PropTypes.string.isRequired,
    amountNumber: PropTypes.number.isRequired
}
