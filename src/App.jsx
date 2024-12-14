import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "./RootLayout.jsx"

import IncomeLayout from "./IncomeLayout.jsx"
import FiatIncome from "./income-routes/FiatIncome.jsx"
import CryptoIncome from "./income-routes/CryptoIncome.jsx"
import TotalIncome from "./income-routes/TotalIncome.jsx"

import ExpensesLayout from "./ExpensesLayout.jsx"
import FiatExpenses from "./expenses-routes/FiatExpenses.jsx"
import CryptoExpenses from "./expenses-routes/CryptoExpenses.jsx"
import TotalExpenses from "./expenses-routes/TotalExpenses.jsx"

import SMS from "./SMS.jsx"

import InvestmentsLayout from "./InvestmentsLayout.jsx"
import FiatInvestments from "./investments-routes/FiatInvestments.jsx"
import CryptoInvestments from "./investments-routes/CryptoInvestments.jsx"
import TotalInvestments from "./investments-routes/TotalInvestments.jsx"

import SettingsLayout from "./SettingsLayout.jsx"
import GeneralSettings from "./settings-routes/GeneralSettings.jsx"
import AccountSettings from "./settings-routes/AccountSettings.jsx"
import IntegrationsSettings from "./settings-routes/IntegrationsSettings.jsx"

import { fiatIncomeDataLoader, cryptoIncomeDataLoader, totalIncomeDataLoader, fiatExpensesDataLoader, cryptoExpensesDataLoader, totalExpensesDataLoader, fiatInvestmentsDataLoader, cryptoInvestmentsDataLoader, totalInvestmentsDataLoader, smsDataLoader } from "./assets/dataLoderFunctions.js";


function App() {
  const mainRouter = createBrowserRouter (createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        {/* IncomeLayout */}
        <Route path="/" element={<IncomeLayout />}>
            <Route index element={<FiatIncome />} loader={fiatIncomeDataLoader} />

            <Route path="fiatIncome" element={<FiatIncome />} loader={fiatIncomeDataLoader} />
            <Route path="cryptoIncome" element={<CryptoIncome />} loader={cryptoIncomeDataLoader} />
            <Route path="totalIncome" element={<TotalIncome />} loader={totalIncomeDataLoader} />
        </Route>

        {/* ExpensesLayout */}
        <Route path="/" element={<ExpensesLayout />}>
          <Route index element={<FiatExpenses />} loader={fiatExpensesDataLoader} />

          <Route path="fiatExpenses" element={<FiatExpenses />} loader={fiatExpensesDataLoader} />
          <Route path="cryptoExpenses" element={<CryptoExpenses />} loader={cryptoExpensesDataLoader} />
          <Route path="totalExpenses" element={<TotalExpenses />} loader={totalExpensesDataLoader} />
        </Route>

        {/* SMS Rout */}
        <Route path="sms" element={<SMS />} loader={smsDataLoader} />

        {/* InvestmentsLayout */}
        <Route path="/" element={<InvestmentsLayout />}>
          <Route index element={<FiatInvestments />} loader={fiatInvestmentsDataLoader} />

          <Route path="fiatInvestments" element={<FiatInvestments />} loader={fiatInvestmentsDataLoader} />
          <Route path="cryptoInvestments" element={<CryptoInvestments />} loader={cryptoInvestmentsDataLoader} />
          <Route path="totalInvestments" element={<TotalInvestments />} loader={totalInvestmentsDataLoader} />
        </Route>

        {/* SettingsLayout */}
        <Route path="/" element={<SettingsLayout />}>
          <Route index element={<GeneralSettings />} />

          <Route path="generalSettings" element={<GeneralSettings />} />
          <Route path="accountSettings" element={<AccountSettings />} />
          <Route path="integrationsSettings" element={<IntegrationsSettings />} />
          
        </Route>
    </Route>
  ))
  return (
    <RouterProvider router={mainRouter}/>
  )
}

export default App
