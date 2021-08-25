import React,{useState,useEffect} from "react";
import Login from "../components/Auth/Login";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
const BasicLayout = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);
  return (
    <>
    
      {user ? (
        <div className="container-scroller">
          <Header />
          <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">{props.children}</div>
          </div>
        </div>
      ) : (
        <Login/>
      )}
    </>
  );
};

export default BasicLayout;
