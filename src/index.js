import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
//import {isAuthenticated} from "api/auth";


const Private = props => {
  const isAuthenticated =!!localStorage.getItem('operation-token')
  return isAuthenticated ? <Route {...props}/> : <Redirect to="/auth/login"/>
}


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/auth/login" />
      <Private path="/admin/index" render={props => <AdminLayout {...props} />}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
