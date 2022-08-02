import store from "store";
import { setUser } from "store/auth";

export const userHandle = (userData) => {
  store.dispatch(setUser(userData));
};
