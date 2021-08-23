import React, { Component,useState } from "react";
import {Link} from 'react-router-dom';

const Sidebar=()=> {
 const [showDropdown, setShowDropdown] = useState(false);
    return (
      <div className="Sidebar">
        {/* partial:partials/_sidebar.html */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard">
                <i className="mdi mdi-home menu-icon" />
                <span className="menu-title">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Appointment">
                <i className="mdi mdi-file-document menu-icon" />
                <span className="menu-title">Appointment</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Patient">
                <i className="mdi mdi-hotel menu-icon" />
                <span className="menu-title">Patient</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/PIQ">
                <i className="mdi mdi-file-check menu-icon" />
                <span className="menu-title">PIQ</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Expense">
                <i className="mdi mdi-cash-multiple menu-icon" />
                <span className="menu-title">Expenses</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Commission">
                <i className="mdi mdi-cash menu-icon" />
                <span className="menu-title">Commission</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Productlist">
                <i className="mdi mdi-package menu-icon" />
                <span className="menu-title">Product </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                <i className="mdi mdi-settings-box menu-icon" />
                <span className="menu-title">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Prescription">
                <i className="mdi mdi-file-document-box menu-icon" />
                <span className="menu-title">Prescription</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Laboratory">
                <i className="mdi mdi-hospital-building menu-icon" />
                <span className="menu-title">Laboratory</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="mdi mdi-power menu-icon" />
                <span className="menu-title">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* partial */}
      </div>
    );
}

export default Sidebar;
