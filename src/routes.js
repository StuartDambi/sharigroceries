// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Products from "views/Dashboard/Products";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import CreateProduct from "views/Dashboard/CreateProduct.jsx";
import Orders from "views/Dashboard/Orders";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: <StatsIcon color="inherit" />,
    component: Products,
    layout: "/admin",
  },
  {
    path: "/createProduct",
    name: "CreateProduct",
    icon: <StatsIcon color="inherit" />,
    component: CreateProduct,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: <StatsIcon color="inherit" />,
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: <StatsIcon color="inherit" />,
    component: Products,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    name: "SETTINGS PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
