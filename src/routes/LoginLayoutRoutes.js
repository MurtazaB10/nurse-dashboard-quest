import React from 'react'
import { Route } from 'react-router-dom';

const LoginLayoutRoute = ({component: Component,layout:Layout, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <Layout>  
            <Component {...matchProps} />  
        </Layout>  
      )} />  
    )  
  }; 

export default LoginLayoutRoute;
