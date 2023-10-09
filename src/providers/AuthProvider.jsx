import { createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";

export const AuthContext = createContext("");

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        } )
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
            // console.log("user in the auth state changed", currentUser);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
      user,
      signUp,
      signIn,
      logOut,
      loading,
      googleSignIn,
      updateUserProfile,
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
