import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function InboxLayout() {
  return (
    <div>
      <Helmet>
        <title>Inbox • Chats</title>
      </Helmet>

      <Sidebar />
      <Outlet />
    </div>
  );
}

export default InboxLayout;
