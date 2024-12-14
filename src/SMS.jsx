import SMSHeader from "./sms-components/SMSHeader.jsx";
import SMSListLoader from "./sms-components/SMSListLoader.jsx";

export default function SMS(){
    return(
        <div className="sms-main-container w-full h-auto flex flex-col justify-start items-end gap-16 px-[4rem]">
            <SMSHeader />
            <SMSListLoader />

        </div>
    )
}