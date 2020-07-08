import Home from "views/Home.jsk";
import Asset from "views/Asset";
import Issues from "views/Issues.jsx";
import Licenses from "views/Licenses.jsx";
import Monitoring from "views/Monitoring.jsx";
import Reports from "views/Reports.jsx";
import Tickets from "views/Tickets.jsx";
import Userportal from "views/User-portal.jsx";
import Logout from "views/Logout.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/Asset",
    name: "Asset",
    icon: "pe-7s-refresh-2",
    component: Asset,
    layout: "/admin"
  },
  {
    path: "/Licenses",
    name: "Licenses",
    icon: "pe-7s-credit",
    component: Licenses,
    layout: "/admin"
  },
  {
    path: "/Tickets",
    name: "Tickets",
    icon:"pe-7s-ticket",
    component: Tickets,
    layout: "/admin"
  },
  {
    path: "/Issues",
    name: "Issues",
    icon: "pe-7s-attention",
    component: Issues,
    layout: "/admin"
  },
  
  {
    path: "/Monitoring",
    name: "Monitoring",
    icon: "pe-7s-monitor",
    component: Monitoring,
    layout: "/admin"
  },
  {
    path: "/Reports",
    name: "Reports",
    icon: "pe-7s-note2",
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/Userportal",
    name: "Userportal",
    icon: "pe-7s-id",
    component: Userportal,
    layout: "/admin"
  },
  {
    path: "/Logout",
    name: "Logout",
    icon: " pe-7s-back",
    component: Logout,
    layout: "/admin"
  },
];

export default dashboardRoutes;
