import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LiaSignOutAltSolid } from "react-icons/lia";
import incomeIcon from "./assets/income.svg";
import expensesIcon from "./assets/expenses.svg";
import smsIcon from "./assets/sms.svg";
import investmentsIcon from "./assets/investments.svg";
import settingsIcon from "./assets/settings.svg";
import logoIconDefault from "./assets/logo-defualt.svg";
import logoIconCollapse from "./assets/logo-collapsed.svg";
import collapseIcon from "./assets/collapse.svg"; // Icon for collapsing
import expandIcon from "./assets/expand.svg"; // Icon for expanding
import avatar from "./assets/avatar.jpg"; // User avatar

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <img 
          src={isCollapsed ? logoIconCollapse : logoIconDefault}
          alt="Toggle"
          className="logo"
          onClick={toggleSidebar}
        />
        <img
          src={isCollapsed ? expandIcon : collapseIcon}
          alt="Toggle"
          className="toggle-icon"
          onClick={toggleSidebar}
        />
      </div>
      <div className="menu-items-container">
        <NavLink to={"/"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={incomeIcon} alt="Income" />
            </div>
            <div className="menu-text-container">
              <h1>Income</h1>
              <p>Click to see how much income you’ve made</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"fiatExpenses"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={expensesIcon} alt="Expenses" />
            </div>
            <div className="menu-text-container">
              <h1>Expenses</h1>
              <p>Click to see how much you’ve spent</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"sms"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={smsIcon} alt="SMS" />
            </div>
            <div className="menu-text-container">
              <h1>SMS Alerts</h1>
              <p>Click to see your financial SMS notifications</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"fiatInvestments"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={investmentsIcon} alt="Investments" />
            </div>
            <div className="menu-text-container">
              <h1>Investments</h1>
              <p>Click to see how much you’ve invested</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"generalSettings"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={settingsIcon} alt="Settings" />
            </div>
            <div className="menu-text-container">
              <h1>Settings</h1>
              <p>Click to change your settings</p>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="sidebar-footer">
        <div className="user-info">
          <img src={avatar} alt="User Avatar" className="avatar" />
          {!isCollapsed && <span className="user-name">OJ-UXDesigner</span>}
        </div>
        <LiaSignOutAltSolid className="signout-icon" />
      </div>
    </div>
  );
}