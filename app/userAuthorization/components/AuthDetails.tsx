'use client'
import React, {useEffect, useState} from 'react'
import { auth } from '@/firebase/config'
import { User, onAuthStateChanged, signOut } from 'firebase/auth'


const AuthDetails = () => {
    const[authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
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
          await signOut(auth);
          // Sign-out successful
          console.log('User has been signed out.');
        } catch (error) {
          // Handle sign-out error
          console.error('Error signing out:', error);
        }
      };
  return (
    <div>
      <div className=" text-7xl text-center text-slate-700">
          {
              authUser ? <div> Signed In!!<div><button onClick={handleSignOut} className="bg-green-600">Sign Out</button></div> </div> : <div> Not Signed In </div>
          }
      </div>
      <div> 
        
      </div>
    </div>
  )
}

export default AuthDetails