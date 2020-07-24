import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios"

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import StaffLayout from "layouts/Staff.js";
import PrivateRoute from "api/auth";

axios.interceptors.request.use(request =>{
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response =>{
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/staff" render={props => <StaffLayout {...props}/>}/>
      <Redirect from="/" to="/auth/login" />
      <PrivateRoute exact path="/admin/index" render={props => <AdminLayout {...props} />}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
