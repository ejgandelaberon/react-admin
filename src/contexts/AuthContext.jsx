import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut
  }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  },[])

  const value = {
    currentUser,
    createUser,
    logIn,
    logOut
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}