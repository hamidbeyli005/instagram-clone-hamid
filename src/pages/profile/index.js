import { getUserInfo } from "firabase";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet, useParams } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./NotFound";
import styles from "scss/s.module.scss";

function ProfileLayout() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, [username]);

  if (user === false) {
    return <NotFound />;
  }

  if (user === null) {
    return <h1>lodeıng...</h1>;
  }

  return (
    user && (
      <div className={styles.Profile}>
        <Helmet>
          <title>
            {user.fullname} (@{user.username})• Instagram photos and videos
          </title>
        </Helmet>

        <Header user={user} />
        <Outlet />
      </div>
    )
  );
}

export default ProfileLayout;
