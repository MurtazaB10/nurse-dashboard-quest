import React, { useState, useEffect } from "react";
import BasicLayout from "../layout/BasicLayout";
import BasicRoutes from "../routes/BasicRoutes";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import LoginLayout from "../layout/LoginLayout";
import LoginRoutes from "../routes/LoginRoutes";
const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <LoginLayout>
               <BasicRoutes />
            </LoginLayout>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
