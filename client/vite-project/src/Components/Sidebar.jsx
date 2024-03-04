import {React, useState, useEffect} from "react";
import "../sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    // useEffect(() => {
        const toggleSidebar = () => {
          // Toggle the state of isSidebarToggled
          setSidebar(!sidebar);
        };
  
    // }, [])
    
  return (
    <div className="sidebar-section">


    <div id="wrapper" className={sidebar ? "toggled" : ""}>
          <div className="top-bar">
   <a href="#menu-toggle" className=" btn-danger hamburger" onClick={toggleSidebar}><i className="fa-solid fa-bars"></i></a>

          <Link to="/"><h1 className="logo">Logo</h1></Link>
          <h2>Employee Management System</h2>
          </div>
        <div id="sidebar-wrapper">
          <div className="fake-container"></div>
            <ul className="menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/employee">Manage Employee</Link></li>
                <li><Link to="/empcard">Employees</Link></li>
            </ul>
        </div>
    </div>
    </div>
  );
}

export default Sidebar;
