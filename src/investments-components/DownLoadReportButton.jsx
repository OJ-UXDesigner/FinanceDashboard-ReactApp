import fileDownloadIcon from "../assets/file-download.svg"
import { Link } from "react-router-dom"

export default function DownLoadReportButton() {
    return (
        <div>
            <Link className="button-with-icon button-with-icon w-fit h-14 flex flex-row justify-start items-center gap-3 bg-gray-100 text-gray-500 font-medium whitespace-nowrap p-4 outline-none border border-gray-300 rounded-md hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out">
                <div>
                    <p>Download Report</p>
                </div>
                <img src={fileDownloadIcon} alt="Filter" />
            </Link>
        </div>
    );
}

