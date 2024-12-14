export default function SMSHeader(){
    return(
        <div className="sms-header-container w-full h-auto flex flex-col justify-start items-start gap-0">
            <div className="w-full h-auto flex flex-row justify-between items-center">
                    <h1 className="font-bold text-[2.5rem] text-[#374151]">SMS Alerts</h1>
                    <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-md ring-gray-200 ring-1 hover:shadow-md focus-within:ring-1 focus-within:ring-gray-500 transition duration-300">
                        <input
                            type="text"
                            placeholder="search sms alerts..."
                            className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500 text-sm"
                        />
                        <button className="text-gray-500 hover:text-gray-800 transition duration-200">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m-1.9 0a7.5 7.5 0 1 0-10.61-10.61 7.5 7.5 0 0 0 10.61 10.61z"
                            />
                            </svg>
                        </button>
                    </div>
            </div>
            <p className="text-sm text-gray-800">Stay informed and in control of your finances with SMS alerts.</p>
        </div>
    )
}