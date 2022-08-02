import { initializeApp } from "firebase/app";
import { getDoc, getFirestore, doc, setDoc } from "firebase/firestore";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
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
const db = getFirestore(app);
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid));

    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};

export const login = async (email, password, navigate) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
};

export const register = async ({ email, password, fullname, username }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));

    if (user.exists()) {
      toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor!`);
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      /* user db add */
      if (response.user) {
        await setDoc(doc(db, "usernames", username), {
          user_id: response.user.uid,
        });
        await setDoc(doc(db, "users", response.user.uid), {
          fullname,
          username,
          followers: [],
          following: [],
          notification: [],
        });
        await updateProfile(auth.currentUser, {
          displayName: fullname,
        });

        return response.user;
      }
    }
  } catch (error) {
    toast.error(error.code);
  }
};
