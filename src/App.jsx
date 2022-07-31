import { useRoutes } from "react-router-dom";
import routes from "routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "components/Loader";
import { useEffect, useState } from "react";

function App() {
  const user = useSelector((state) => state.auth.user);
  const [redirect, setRedirect] = useState(false);
  const getRoutes = useRoutes(routes);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirect(true);
    }, 1400);
    return () => {
      clearTimeout(timeout);
    };
  });

  if (!user && !redirect) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Toaster position="top-right" />
      {getRoutes}
    </>
  );
}

export default App;
