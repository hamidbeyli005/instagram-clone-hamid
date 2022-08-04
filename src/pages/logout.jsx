import { logOut } from "firabase.js";
import { useEffect } from "react";

function Logout() {
  useEffect(() => {
    logOut();
  });
  return null;
}

export default Logout;
