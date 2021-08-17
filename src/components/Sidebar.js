import React, { Component } from "react";
// import React, { useState }  from 'react';
import "../App/App.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
  }

  render() {
    return (
      <div className="Sidebar">
        {/* partial:partials/_sidebar.html */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="/Dashboard">
                <i className="mdi mdi-home menu-icon" />
                <span className="menu-title">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Appointment">
                <i className="mdi mdi-file-document menu-icon" />
                <span className="menu-title">Appointment</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Patient">
                <i className="mdi mdi-hotel menu-icon" />
                <span className="menu-title">Patient</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/PIQ">
                <i className="mdi mdi-file-check menu-icon" />
                <span className="menu-title">PIQ</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Expense">
                <i className="mdi mdi-cash-multiple menu-icon" />
                <span className="menu-title">Expenses</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Commission">
                <i className="mdi mdi-cash menu-icon" />
                <span className="menu-title">Commission</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Product">
                <i className="mdi mdi-package menu-icon" />
                <span className="menu-title">Product </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Services">
                <i className="mdi mdi-settings-box menu-icon" />
                <span className="menu-title">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Prescription">
                <i className="mdi mdi-file-document-box menu-icon" />
                <span className="menu-title">Prescription</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Laboratory">
                <i className="mdi mdi-hospital-building menu-icon" />
                <span className="menu-title">Laboratory</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Dashboard">
                <i className="mdi mdi-power menu-icon" />
                <span className="menu-title">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* partial */}
      </div>
    );
  }
}

export default Sidebar;
