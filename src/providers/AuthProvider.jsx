import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

// Firebase Auth
const auth = getAuth(app);
// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create a new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User login with email & Password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //signIn with Google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Update User Profile
  const updateUserInfo = (user, name, photo) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
        setUser(loggedUser);
        // get and set token using AXIOS
        if(loggedUser){

          axios.post('http://localhost:5000/generate-jwt', {email: loggedUser.email})
          .then(data =>{
            // console.log(data.data)
            localStorage.setItem('access-token', data.data.token)
          })
        }else{
          localStorage.removeItem('access-token')
        }
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }
}, [])

  // logout
  const logOut = () =>{
    setLoading(true);
      return signOut(auth);
  }

  // Auth Provider
  const authInfo = {
    user,
    loading,
    createNewUser,
    loginUser,
    googleSignIn,
    updateUserInfo,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
