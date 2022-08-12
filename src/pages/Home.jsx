import React from "react";
import { Helmet } from "react-helmet";
import { logOut } from "firabase.js";


function Home() {
  return (
    <div>
      <Helmet>
        <title>Instagram</title>
      </Helmet>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>home component</h1>
        <button onClick={logOut()}>logout</button>
      </div>
    </div>
  );
}

export default Home;
