import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";
import Logout from "pages/logout";
import PrivateRoute from "components/PrivateRoute";
import MainLayout from "pages/Layout";
import ProfileLayout from "pages/profile";
import Posts from "pages/profile/Posts";
import Tagged from "pages/profile/Tagged";
import InboxLayout from "pages/inbox";
import Inbox from "pages/inbox/Inbox";
import Chat from "pages/inbox/chat";

const routes = [
  {
    path: "/",
    element: <Home />,
    auth: true,
  },
  {
    path: "/",
    element: <MainLayout />,
    auth: true,
    children: [
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/inbox",
        element: <InboxLayout />,
        children:[
          {
            index:true,
            element:<Inbox/>
          },
          {
            path:":chatId",
            element:<Chat/>
          }
        ]
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:username",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Posts />,
          },
          {
            path: "tagged",
            element: <Tagged />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
