import sendIcon from "../assets/send.svg";

export default function ChatInput() {
    return (
        <div className="chat-input-container w-full h-14 flex items-center gap-3 bg-[#FDFDFD] border border-gray-300 rounded-full ps-8 pe-3 shadow-sm hover:shadow-md transition duration-300 ease-in-out">
            {/* Input Field */}
            <input
                type="text"
                placeholder="Talk to our AI finance expert"
                className="flex-grow bg-transparent placeholder:text-[#B3B3B3] placeholder:text-[16px] placeholder:font-medium focus:outline-none"
            />
            
            {/* Send Button */}
            <button className="flex items-center justify-center w-10 h-10 bg-black rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_8px_1px_rgba(58,58,58,0.6)]">
                <img src={sendIcon} alt="Send" className="w-8 h-8" />
            </button>
        </div>
    );
}
