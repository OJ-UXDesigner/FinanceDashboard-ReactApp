import IntegSettingsBanks from "./IntegSettingsBanks";
import IntegSettingsWallet from "./IntegSettingsWallet";

export default function IntegrationsSettings() {
    return (
        <div className="bg-white w-full p-8 border-l-[0.2px] border-[#dfdfdf] rounded-tr-lg rounded-br-lg">
            <h1 className="text-2xl font-semibold text-[#3a3a3a]">Integration Settings</h1>
            <p className="text-gray-600 mb-4">Manage your bank account and crypto wallets</p>
            <hr className="mb-4" />
            <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
                <IntegSettingsBanks />
                <IntegSettingsWallet />
            </div>
           
        </div>
    );
}