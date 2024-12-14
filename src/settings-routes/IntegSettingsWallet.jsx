import { MdAdd } from "react-icons/md";
import IntegCryptoWallet from "./IntegCryptoWallet"

export default function IntegSettingsWallet() {
    return (
        <div className="bg-white w-full px-6 pt-4 pb-6 border-[0.2px] border-[#dfdfdf] rounded-tr-lg rounded-lg">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h1 className="text-[1.25rem] font-semibold text-[#3a3a3a]">Crypto Wallet</h1>
                    <p className="text-gray-600">Manage your connected crypto wallets or add new</p>
                </div>
                <a href="#" className="text-[#868686] hover:underline hover:text-[#3A3A3A] hover:font-semibold text-[14px] flex items-center gap-1">
                    <MdAdd className="w-4 h-4" />
                    Add Crypto Wallet
                </a>
            </div>

            <div className="w-full h-auto flex flex-row gap-4">
                <IntegCryptoWallet 
                    walletName={"Coinbase Wallet"}
                    address={"******************Ef123456"}
                />

                <IntegCryptoWallet 
                    walletName={"National Commercial Bank"}
                    address={"******************DeF12345"}
                />
            </div>
        </div>
    );
}