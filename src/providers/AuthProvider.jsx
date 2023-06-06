import { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// Firebase Auth
const auth = getAuth(app);
// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create a new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User login with email & Password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //signIn with Google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Update User Profile
  const updateUserInfo = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Auth Provider
  const authInfo = {
    user,
    createNewUser,
    loginUser,
    googleSignIn,
    updateUserInfo
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
