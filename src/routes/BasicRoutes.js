import React from "react";
import { Route, Switch } from "react-router-dom";
function BasicRoutes() {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route path="/Appointment" component={Appointment} />
          <Route path="/Patient" component={Patient} />
          <Route path="/PIQ" component={PIQ} />
          <Route path="/Expense" component={Expense} />
          <Route path="/Commission" component={Commission} />
          <Route path="/Product" component={Product} />
          <Route path="/Services" component={Services} />
          <Route path="/Prescription" component={Prescription} />
          <Route path="/Laboratory" component={Laboratory} />
        </Switch>
      </div>
    </div>
  );
}

export default BasicRoutes;
