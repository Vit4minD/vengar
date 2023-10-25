'use client'
import React, {useState} from 'react'
import Firebase, {auth} from '../../../firebase/config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth';
import { collection, setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

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
    <div className='sign-in-container self-center'>
        <form className=" text-zinc-50" onSubmit={onSubmit}>
            <h1 className="text-5xl text-blue-500 bg-gray-200">Create Account</h1>
            <input className='text-slate-950' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input className='text-slate-950' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button className='bg-green-600' type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp