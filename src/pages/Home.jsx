import React from "react";
import { Helmet } from "react-helmet";

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
      </div>
    </div>
  );
}

export default Home;
