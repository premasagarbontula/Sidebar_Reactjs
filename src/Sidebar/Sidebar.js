import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
const Sidebar = () => {
  const [isopen, setIsOpen] = useState(true);
  return (
    <div className={`sidebar ${!isopen && "closed"}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={() => setIsOpen(!isopen)}>
          <div className={`arrow ${isopen ? "left" : "right"}`}></div>
        </button>
        <div className="logo">
          {isopen ? <h2>MY APP</h2> : <h2 className="logo-letter">M</h2>}
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          {SidebarData?.map((item, index) => (
            <li key={index}>
              <a href={item.path}>
                <p>{item.icon}</p>
                <p>{isopen ? item.title : ""}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
