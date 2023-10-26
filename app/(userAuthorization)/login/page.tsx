'use client'
import React, {useState} from 'react'
import Firebase, {auth} from '../../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import AuthDetails from '../components/AuthDetails'

const SignIn = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>Log In</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit'>Log In Chat</button>
        </form>
        <div>Don't have an account? <a href='signUp'>Sign Up</a></div>
    </div>
  )
}

export default function Home() {
    return(
        <>
            <SignIn/>
            <AuthDetails/>
        </>
    )
}