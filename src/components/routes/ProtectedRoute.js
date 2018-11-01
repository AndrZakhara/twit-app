import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const {component: ProtectedComponent, authorized, ...rest} = props;

  const renderProtected = (routeProps) => {
    return authorized
      ? <ProtectedComponent {...routeProps}/>
      : <Redirect to="/auth" />;
  };
  return <Route {...rest} render={renderProtected}/>;
}