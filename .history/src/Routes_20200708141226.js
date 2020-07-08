import Home from "./views/Home.jsk";
import Login from "./views/Login";

const HomeRoutes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  }
];

export default HomeRoutes;
