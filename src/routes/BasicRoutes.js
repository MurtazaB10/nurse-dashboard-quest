import React,{useState,useEffect} from "react";
import { Route, Switch } from "react-router-dom";
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

const BasicRoutes=()=>{
  const [user,setUser]=useState('');

  useEffect(() => {
    
    setUser(localStorage.getItem('user'));
  }, [user])

  return (
      <div className="content-wrapper">
        <Switch>
        {/* <Route exact path="/" render={() => {
            return user? <Dashboard/> : <Redirect to="/login"/> 
          }} /> */}
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route path="/Appointment" component={Appointment} />
          <Route path="/Patient" component={Patient} />
          <Route path="/PIQ" component={PIQ} />
          <Route path="/Expense" component={Expense} />
          <Route path="/Commission" component={Commission} />
          <Route path="/Productlist" component={ProductList} />
          <Route path="/Services" component={Services} />
          <Route path="/Prescription" component={Prescription} />
          <Route path="/Laboratory" component={Laboratory} />
        </Switch>
      </div>

  );
}

export default BasicRoutes;
