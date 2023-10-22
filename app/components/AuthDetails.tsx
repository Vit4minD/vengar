'use client'
import React, {useEffect, useState} from 'react'
import { Auth } from '@/firebase/config'
import { User, onAuthStateChanged, signOut } from 'firebase/auth'

const AuthDetails = () => {
    const[authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const listen = onAuthStateChanged(Auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
        return () => listen();
    }, [])
    const handleSignOut = async () => {
        try {
          await signOut(Auth);
          // Sign-out successful
          console.log('User has been signed out.');
        } catch (error) {
          // Handle sign-out error
          console.error('Error signing out:', error);
        }
      };
  return (
    <div className=" text-7xl text-center text-slate-50">
        {
            authUser ? <div> Signed in as {authUser.email.substring(0,authUser.email.indexOf("@"))}!<div><button onClick={handleSignOut} className="bg-green-600">Sign Out</button></div> </div> : <div> Not Signed In </div>
        }
    </div>
  )
}

export default AuthDetails