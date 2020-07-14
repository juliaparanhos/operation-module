/*eslint-disable*/
import Index from "views/home/Index.js";
import Register from "views/admin/access/Register.js";
import Login from "views/admin/access/Login.js";
import LoginStaff from "views/staff/access/Login_Staff.js";
import Logout from "views/admin/access/Logout.js";
import CreateProject from "views/admin/Create_project.js";
import viewProject from "views/admin/viewproject/viewProject";
import ViewStaffs from "views/admin/staffs/ViewStaffs.js";
import StaffsDetails from "views/admin/staffs/StaffDetails.js";
import Products from "views/admin/stock/Products.js"; 
import StockIndex from "views/admin/stock/Index.js";
import Stock from "views/admin/stock/Stock.js";
import NotFound from "notfound.js"

var routes = [
  {
    path: "/not-found",
    component: NotFound,
    layout: "/auth"
  },
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/logout",
    component: Logout,
    layout: "/auth"
  },
  {
    path: "/login",
   // name: "Login",
   // icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/:slug/login",
    component: LoginStaff,
    layout: "/auth"
  },
  {
    path: "/:slug/estoque",
    component: Stock,
    layout: "/admin"
  },
  {
    path: "/projetos/:slug/detalhamento",
    component: StockIndex,
    layout: "/admin"
  },
  {
    path: "/novo-projeto",
    component: CreateProject,
    layout: "/admin"
  },
  {
    path: "/:slug/novo-produto",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/projetos/:slug/staffs/:id",
    component: StaffsDetails,
    layout: "/admin"
  },
  {
    path: "/projetos/:slug/staffs",
    component: ViewStaffs,
    layout: "/admin"
  },
  {
    path: "/projetos/:slug",
    component: viewProject,
    layout: "/admin"
  },
  
 {
    path: "/register",
    //name: "Register",
    //icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  } 
]; 
export default routes;
