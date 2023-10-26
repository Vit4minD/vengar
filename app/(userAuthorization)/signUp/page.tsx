'use client'
import React, {useState} from 'react'
import Firebase, {auth} from '../../../firebase/config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth';
import { collection, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import AuthDetails from '../components/AuthDetails';

const myCollection = collection(db, 'users');

const SignUp = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                  let email:string = user.email!==null ? user.email : "";
                  const data = {
                    email : user.email
                  }
                  await setDoc(doc(db, 'users', email), data)
                }
              });
            console.log(userCredential)
        }).catch((error)=>{
            alert('An account with this email has already been created.')
        })      
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>Create Account</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit'>Sign Up</button>
        </form>
        <div>Already have an account? <a href='login'>Log In</a></div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SignUp/>
      <AuthDetails/>
    </>
    
  )
}