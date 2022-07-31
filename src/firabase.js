import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { userHandle } from "utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCowSkL3kv9zFAtoNGesWw1Rh7_JOaPQt0",
  authDomain: "hamid-instagram.firebaseapp.com",
  projectId: "hamid-instagram",
  storageBucket: "hamid-instagram.appspot.com",
  messagingSenderId: "496142551469",
  appId: "1:496142551469:web:3021e92e3dd97d236fb924",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
};
