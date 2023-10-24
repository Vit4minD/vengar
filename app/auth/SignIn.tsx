'use client'
import React, {useState} from 'react'
import Firebase, {Auth} from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(Auth, email, password)
        .then((userCredential)=> {
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className='sign-in-container self-center'>
        <form className=" text-zinc-50" onSubmit={onSubmit}>
            <h1 className="text-5xl text-blue-500 bg-gray-200">Log In</h1>
            <input className='text-slate-950' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input className='text-slate-950' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button className='bg-green-600' type='submit'>Log In Chat</button>
        </form>
    </div>
  )
}

export default SignIn