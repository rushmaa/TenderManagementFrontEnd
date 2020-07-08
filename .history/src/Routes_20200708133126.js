import Home from "views/Home.jsk";

const HomeRoutes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
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
