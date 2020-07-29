/*eslint-disable*/
import Index from "views/home/Index.js";
import IndexStaff from "views/staff/home/IndexStaff.js";
import Register from "views/admin/access/Register.js";
import Login from "views/admin/access/Login.js";
import LoginStaff from "views/staff/access/Login_Staff.js";
import Logout from "views/admin/access/Logout.js";
import CreateStaffsOccup from "views/admin/operation/occupations/staffs occupations/Create_staffsOccup.js"
import CreateTime from "views/admin/operation/timerows/Create_time.js";
import CreateType from "views/admin/operation/occupations/types/Create_type.js"
import CreateProject from "views/admin/Create_project.js";
import CreateStaff from "views/admin/staffs/Create_staffs.js";
import CreatePlace from "views/admin/operation/places/Create_place.js";
import CreateStock from "views/admin/stock/Create_stock.js";
import CreateOccupation from "views/admin/operation/occupations/Create_occupation.js";
import ViewTypes from "views/admin/operation/occupations/types/ViewTypes.js"
import viewProject from "views/admin/viewproject/viewProject";
import ViewStaffs from "views/admin/staffs/ViewStaffs.js";
import ViewPlaces from "views/admin/operation/places/ViewPlaces.js";
import ViewOccupations from "views/admin/operation/occupations/ViewOccupations.js";
import OccupationDetails from "views/admin/operation/occupations/OccupationDetails.js";
import StaffsDetails from "views/admin/staffs/StaffDetails.js";
import TypeOccupationDetails from "views/admin/operation/occupations/types/TypeDetails.js";
import ProjectDetails from "views/admin/viewproject/ProjectDetails.js";
import PlaceDetails from "views/admin/operation/places/PlaceDetails.js";
import ProductDetails from "views/admin/stock/ProductDetails.js";
import Products from "views/admin/stock/Products.js"; 
import ProductsList from "views/admin/stock/Products_list.js";
import StockIndex from "views/admin/stock/Index.js";
import OperationIndex from "views/admin/operation/Index.js";
import Stock from "views/admin/stock/Stock.js";
import TableOperation from "views/home/TableOperation.js"
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
    path: "/:slug/operacao",
    component: TableOperation,
    layout: "/admin"
  },
  {
    path: "/:slug/login",
    component: LoginStaff,
    layout: "/auth"
  },
  {
    path: "/:slug/index/staff",
    component: IndexStaff,
    layout: "/admin"
  },
  {
    path: "/:slug/definir-estoque",
    component: CreateStock,
    layout: "/admin"
  },
  {
    path: "/:slug/criar-staff",
    component: CreateStaff,
    layout: "/admin"
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
    path: "/editar-projeto/:id",
    component: ProjectDetails,
    layout: "/admin"
  },
  {
    path: "/novo-projeto",
    component: CreateProject,
    layout: "/admin"
  },
  {
    path: "/projetos/:slug/detalhamento-operacao",
    component: OperationIndex,
    layout: "/admin"
  },
  {
    path: "/:slug/locais",
    component: ViewPlaces,
    layout: "/admin"
  },
  {
    path: "/:slug/local/:id",
    component: PlaceDetails,
    layout: "/admin"
  },
  {
    path: "/:slug/novo-local",
    component: CreatePlace,
    layout: "/admin"
  },
  {
    path: "/:slug/produtos",
    component: ProductsList,
    layout: "/admin"
  },
  {
    path: "/:slug/produto/:id",
    component: ProductDetails,
    layout: "/admin"
  },
  {
    path: "/:slug/novo-produto",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/:slug/funcoes",
    component: ViewOccupations,
    layout: "/admin"
  },
  {
    path: "/:slug/funcao/:id",
    component: OccupationDetails,
    layout: "/admin"
  },
  {
    path: "/:slug/nova-funcao",
    component: CreateOccupation,
    layout: "/admin"
  },
  {
    path: "/:slug/tipos-funcao",
    component: ViewTypes,
    layout: "/admin"
  },
  {
    path: "/:slug/tipo-funcao/:id",
    component: TypeOccupationDetails,
    layout: "/admin"
  },
  {
    path: "/:slug/novo-tipo-funcao",
    component: CreateType,
    layout: "/admin"
  },
  {
    path: "/:slug/staffs/:id/definir-funcao",
    component: CreateStaffsOccup,
    layout: "/admin"
  },
  {
    path: "/:slug/definir-tabela-horarios",
    component: CreateTime,
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
    path: "/projetos/:slug/:id",
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
