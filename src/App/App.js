import React from 'react';
import { render } from "react-dom";
import { 
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/Dashboard';
import Appointment from '../pages/Appointment';
import Patient from '../pages/Patient';
import PIQ from '../pages/PIQ';
import Expense from '../pages/Expense';
import Commission from '../pages/Commission';
import Product from '../pages/Product';
import Services from '../pages/Services';
import Prescription from '../pages/Prescription';
import Laboratory from '../pages/Laboratory';

const App = () => {
  return (
    <div className="App">
       <switch>
            <div className="container-scroller">
              <Header/>
               <div className="container-fluid page-body-wrapper">
                  <Sidebar/>
                  <div className="main-panel">
                      <div className="content-wrapper">
                          <Route exact path="/" component={Dashboard} />
                          <Route exact path="/Dashboard" component={Dashboard} />
                          <Route  path="/Appointment" component={Appointment} />
                          <Route  path="/Patient" component={Patient} />
                          <Route  path="/PIQ" component={PIQ} />
                          <Route  path="/Expense" component={Expense} />
                          <Route  path="/Commission" component={Commission} />
                          <Route  path="/Product" component={Product} />
                          <Route  path="/Services" component={Services} />
                          <Route  path="/Prescription" component={Prescription} />
                          <Route  path="/Laboratory" component={Laboratory} />
                      </div>
                  </div>
                </div>
            </div>
      </switch>
    </div>
  );
}

export default App;