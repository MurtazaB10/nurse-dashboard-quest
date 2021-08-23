import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BasicLayout from "../layout/BasicLayout";
import BasicRoutes from "../routes/BasicRoutes";
import { Provider } from "react-redux";
import store from "../redux/store";
import Login from "../components/Auth/Login";
import { createBrowserHistory } from "history";
import { useState, useEffect } from "react";
const App = () => {
  const history = createBrowserHistory();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  return (
    <div className="App">
      <Router history={history}>
        <Provider store={store}>
          {user ? (
            <BasicLayout>
              <BasicRoutes />
            </BasicLayout>
          ) : (
            <Login />
          )}
        </Provider>
      </Router>
    </div>
  );
};

export default App;
