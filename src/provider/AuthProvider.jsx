import { createContext } from "react";
import PropTypes from 'prop-types'
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';
import { useEffect } from "react";
  
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)

    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logOut=()=>{
        setLoading(true)
       return   signOut(auth)

    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo={
        user,
        createUser,
        logOut,
        signIn,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node.isRequired
}
export default AuthProvider;