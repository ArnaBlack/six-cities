import React from 'react';
import {Redirect} from 'react-router-dom';

const withPrivateRoute = (Component, isPrivate) => {
  const WithPrivateRoute = (props) => isPrivate
    ? <Redirect />
    : <Component
      {...props}
    />;

  return WithPrivateRoute;
};

export default withPrivateRoute;
