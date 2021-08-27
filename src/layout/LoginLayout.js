import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const LoginLayout = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);
  return (
    <>
    {props.children}
  </>
  );
};

export default LoginLayout;
