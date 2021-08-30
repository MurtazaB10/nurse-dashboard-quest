import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Appointment from "../pages/Appointment/Appointment";
import Patient from "../pages/Patient/Patient";
import PIQ from "../pages/PIQ/PIQ";
import Expense from "../pages/Expense/Expense";
import Commission from "../pages/Commision/Commission";
import Services from "../pages/Services/Services";
import Prescription from "../pages/Prescription/Prescription";
import Laboratory from "../pages/Laboratory/Laboratory";
import ProductList from "../pages/Product/ProductList";
import Login from "../components/Auth/Login";
import LoginLayoutRoute from "./LoginLayoutRoutes";
import BasicLayout from "../layout/BasicLayout";
import LoginLayout from "../layout/LoginLayout";

const BasicRoutes = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  return (
    <div className="content-wrapper">
      <Switch>
        {/* <Route exact path="/" render={() => {
            return user? <Redirect to='/Dashboard'/> : <Redirect to="/Login"/> 
          }} /> */}
        <LoginLayoutRoute
          exact
          path="/"
          component={Dashboard}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          exact
          path="/Dashboard"
          component={Dashboard}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          path="/Appointment"
          component={Appointment}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          path="/Patient"
          component={Patient}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute path="/PIQ" component={PIQ} Layout={BasicLayout} />
        <LoginLayoutRoute
          path="/Expense"
          component={Expense}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          path="/Commission"
          component={Commission}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          path="/Productlist"
          component={ProductList}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          path="/Services"
          component={Services}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          path="/Prescription"
          component={Prescription}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          path="/Laboratory"
          component={Laboratory}
          Layout={BasicLayout}
        />
        <LoginLayoutRoute
          path="/Login"
          component={Login}
          Layout={LoginLayout}
        />
      </Switch>
    </div>
  );
};

export default BasicRoutes;
