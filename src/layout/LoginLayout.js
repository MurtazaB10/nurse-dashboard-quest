import React, { useState, useEffect } from "react";

const LoginLayout = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);
  return <>{props.children}</>;
};

export default LoginLayout;
