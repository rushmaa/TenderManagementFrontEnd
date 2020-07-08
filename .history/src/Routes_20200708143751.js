import Home from "./views/Home.jsk";
import UserLogin from "./views/UserLogin.jsx";

const HomeRoutes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: UserLogin
  }
];

export default HomeRoutes;
