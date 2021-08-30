import React from "react";
import { Redirect, Route } from "react-router-dom";

const LoginLayoutRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} /> : <Redirect to="/Login" />
        </Layout>
      )}
    />
  );
};

export default LoginLayoutRoute;
