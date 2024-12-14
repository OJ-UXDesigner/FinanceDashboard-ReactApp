import { useLoaderData } from "react-router-dom";
import SMSFilterButton from "../sms-components/SMSFilterButton.jsx";
import SMSList from "../sms-components/SMSList.jsx";

export default function SMSListLoader() {
    const smsListDataLoader = useLoaderData();

    if (!smsListDataLoader || smsListDataLoader.length === 0) {
        return <p>No SMS notifications available.</p>;
    }

    return (
        <div className="w-full h-auto flex flex-col justify-start items-end gap-6">
            <SMSFilterButton />
            <div className="sms-list w-full h-[600px] overflow-y-auto flex flex-col gap-[1.5rem] pe-4">
                {smsListDataLoader.map((sms, index) => (
                    <div key={index} className="w-full h-auto flex flex-row justify-between items-center bg-gray-50 p-2 rounded-md">
                        <SMSList type={sms.type} message={sms.message} date={sms.date} />
                    </div>
                ))}
            </div>
        </div>
    );
}