import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
// console.log(googleProvider, githubProvider);

const AuthProvider = ( {children} ) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const githubSignUp = () => {
    return signInWithPopup(auth, githubProvider);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log('logged n user inside auth state observer', loggedUser);
      setUser(loggedUser)
    }) 

    return () => {
      unsubscribe();
    }
  }, [])

  const userInfo = {
    user,
    createUser,
    login,
    googleSignUp,
    githubSignUp,
    logOut
  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;