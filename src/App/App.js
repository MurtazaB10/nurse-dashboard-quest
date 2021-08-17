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
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Appointment from './Appointment';
import Patient from './Patient';
import PIQ from './PIQ';
import Expense from './Expense';
import Commission from './Commission';
import Product from './Product';
import Services from './Services';
import Prescription from './Prescription';
import Laboratory from './Laboratory';

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