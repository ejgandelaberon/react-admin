import React, { useContext, useEffect, useState } from 'react'
import { auth, createUser, signIn, editEmail, editPassword } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const createNewUser = async (email, password) => {
    return await createUser(auth, email, password)
  }

  const login = async (email, password) => {
    return await signIn(auth, email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const updateUserEmail = (user, email) => {
    return editEmail(user, email)
  }

  const updatePassword = (user, password) => {
    return editPassword(user, password)
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
    createNewUser,
    login,
    logout,
    updateUserEmail,
    updatePassword
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}