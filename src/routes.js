/*eslint-disable*/
import Index from "views/home/Index.js";
import Register from "views/admin/access/Register.js";
import Login from "views/admin/access/Login.js";
import CreateProject from "views/admin/Create_project.js";
import viewProject from "views/admin/viewproject/viewProject";
import ViewStaffs from "views/admin/staffs/ViewStaffs.js";
import StaffsDetails from "views/admin/staffs/StaffDetails.js";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/login",
   // name: "Login",
   // icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/novo-projeto",
    component: CreateProject,
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
