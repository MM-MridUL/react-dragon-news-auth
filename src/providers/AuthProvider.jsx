import { useEffect, useState } from "react";
import AuthContext from "../Context/authContext";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebas.config";

 const auth =getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password)=>{

        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // Gooogle Login
    const googleLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    // Github Login
    const githubLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);

    }


    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
     const unSubscribe =   onAuthStateChanged(auth,currentUser=>{
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        githubLogin,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node
}