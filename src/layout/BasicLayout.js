import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
const BasicLayout=(props)=> {
  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
            {props.children}
        </div>
      </div>
    </div>
  );
}

export default BasicLayout;
