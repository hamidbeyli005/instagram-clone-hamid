import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import styles from "scss/s.module.scss";


function InboxLayout() {
  return (
    <div className={styles.Inbox}>
      <Helmet>
        <title>Inbox • Chats</title>
      </Helmet>

      <Sidebar />
      <Outlet />
    </div>
  );
}

export default InboxLayout;
