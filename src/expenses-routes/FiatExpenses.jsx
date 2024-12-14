import { useLoaderData } from "react-router-dom";
import FilterButton from "../income-components/FilterButton.jsx";
import TotalFiatHeading from "../income-components/TotalFiatHeading.jsx";
import FiatAmountList from "../income-components/FiatAmountList.jsx";
import DownLoadReportButton from "../income-components/DownLoadReportButton.jsx";
import ChatInput from "../income-components/ChatInput.jsx";


export default function FiatExpenses(){
    const fiatIncomeAmountData = useLoaderData ()
    return(
        <div className="w-full h-full flex flex-col justify-between items-star px-[4rem]">

            {/* filter and Amount Components */}
            <div className="filter-and-amount-container w-full h-auto flex flex-col justify-start items-start gap-[1.5rem]">
                {/* Filter Button */}
                <div className="filter-button-container w-full h-auto flex flex-row justify-end items-end pt-16">
                    <FilterButton filterNumber={2}/>
                </div>

                {/* Total Amount Component */}
                <TotalFiatHeading
                    amountTitle= "Total Fiat Expenses"
                    amountNumber={185300}
                />

            </div>
            
            {/* Amount List Component */}
            <div className="list-and-report-container filter-and-amount-container w-full h-auto flex flex-col justify-start items-start gap-[1.5rem]">
                <div className="amount-list-container w-full h-auto flex flex-col justify-start items-start gap-8 pt-12">
                    {fiatIncomeAmountData.map((data, index)=>(
                        <div key={index} className="w-full h-auto flex flex-row justify-between items-center border-l-2 border-[#00B658]">
                            <FiatAmountList amountNumber={data.amount} amountDate={data.date}/>
                        </div>
                    ))}
                </div>
                 {/* DownLoad Report Button Component */}
                 <div className="filter-button-container w-full h-auto flex flex-row justify-end items-end pt-6">
                    <DownLoadReportButton />
                </div>
            </div>
            
            
            {/* Chat Input Field Component */}
            <div className="chat-input-container pt-16">
                    <ChatInput />
            </div>
        </div>
    )
}

