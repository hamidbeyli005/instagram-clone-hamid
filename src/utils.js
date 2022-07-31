import store from "store";
import { setUser } from "store/auth";

export const userHandle = (userData) => {
  // refres json
  store.dispatch(setUser(JSON.stringify(userData)));
};
