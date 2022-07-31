import Home from "pages/Home";
import Login from "pages/Login";
import PrivateRoute from "components/PrivateRoute";

const routes = [
  {
    path: "/",
    element: <Home />,
    auth: true,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
const checkAuth = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = checkAuth(route.children);
    }
    return route;
  });
export default checkAuth(routes);
