// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
//
// export default function ProtectedRoute(props) {
//   const {component: ProtectedComponent, authorized, ...rest} = props;
//
//   const renderProtected = (routeProps) => {
//     return authorized
//       ? <ProtectedComponent {...routeProps}/>
//       : <Redirect to="/auth" />;
//   };
//   return <Route {...rest} render={renderProtected} />;
// }

import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
// import {moduleName} from '../../ducks/auth'
// import UnAuthorized from './UnAuthorized'

class ProtectedRoute extends Component {
  static propTypes = {

  };

  render() {
    const {component, ...rest} = this.props
    // const {component: ProtectedComponent, authorized, ...rest} = this.props;
    return <Route {...rest} render={this.renderProtected}/>
  }

  renderProtected = (routeProps) => {
    const {component: ProtectedComponent, authorized} = this.props
    // return authorized ? <ProtectedComponent {...routeProps}/> : <UnAuthorized />
    return authorized
      ? <ProtectedComponent {...routeProps}/>
      : <Redirect to="/auth" />;
  }
}

export default connect(state => ({
  // authorized: !!state[moduleName].user
}), null, null, {pure: false})(ProtectedRoute)