import React from "react";
import BasicLayout from "../layout/BasicLayout";
import BasicRoutes from "../routes/BasicRoutes";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <BasicLayout>
            <BasicRoutes />
          </BasicLayout>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
