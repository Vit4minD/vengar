'use client'
import React, {useState} from 'react'
import Firebase, {auth} from '../../../firebase/config'
import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth';
import { collection, setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import AuthDetails from '../components/AuthDetails';
import { useRouter } from 'next/navigation';

const myCollection = collection(db, 'users');


const SignUp = () => {
    const router = useRouter();
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
                    email : user.email,
                    career: null,
                    collegeRigor: null,
                    educationLvl: null,
                    questionaire: false,
                  }
                  await setDoc(doc(db, 'users', email), data)
                }
                router.push('/questionaire')
              });
            console.log(userCredential)
        }).catch((error)=>{
            alert('An account with this email has already been created.')
        })    
    }
    const googleAuth = async () =>{
      const provider = await new GoogleAuthProvider()
      signInWithPopup(auth, provider).then(async (userCredential)=>
      {
        let email:string = userCredential.user.email!==null ? userCredential.user.email : "";
        const docRef = doc(db,'users',email)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists() === false){
          const data = {
              email : email,
              career: null,
              collegeRigor: null,
              educationLvl: null,
              questionaire: false,
            }
            await setDoc(doc(db, 'users', email), data)
        }
        router.push('/questionaire')
      })
      .catch((error) => console.log(error));
      return;
  }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>Create Account</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit'>Sign Up</button>
        </form>
        <button onClick={googleAuth}>Sign Up With Google</button>
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