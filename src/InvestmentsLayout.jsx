import { Outlet } from "react-router-dom";
import Investments from "./Investments.jsx";

export default function InvestmentsLayout(){
    return(
        <div>
            <Investments />
            <Outlet />
        </div>
    )
}