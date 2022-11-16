import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword,updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const providerLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const updateUserProfile = (profile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, profile)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false)
    })

    return ()=>{
      return unsubscribe()
    }
  },[])

  const logOut = () =>{
    localStorage.removeItem('genius-token')
    return signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    logInUser,
    providerLogin,
    updateUserProfile,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;