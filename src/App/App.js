import React from "react";
import BasicLayout from "../layout/BasicLayout";
import BasicRoutes from "../routes/BasicRoutes";

const App = () => {
  return (
    <div className="App">
      <BasicLayout>
        <BasicRoutes />
      </BasicLayout>
    </div>
  );
};

export default App;
