import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// Firebase Auth
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create a new user
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };


    // Auth Provider
    const authInfo = {
        user,
        createNewUser
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;