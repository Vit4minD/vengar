'use client'
import React, {useState} from 'react'
import Firebase, {auth, db} from '../../../firebase/config'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import AuthDetails from '../components/AuthDetails'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import Head from 'next/head';
import '../../spany.css';


const SignIn = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const router = useRouter();
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            console.log(userCredential)
            router.push('/questionaire')
        }).catch((error)=>{
            alert('Invalid Email or Password');
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
    <html>
        <Head>
            <head>
                <link rel = 'stylesheet' href = 'style.css'></link>
            </head>
        </Head>
        <body>
            <div className="banner">
                <div className="navbar">
                    <img src = "./favicon.ico" className = "logo"></img>
                    <ul>
                        <li><a href = "/">Home</a></li>
                        <li><a href = "calendar">Calendar</a></li>
                        <li><a href = "opportunity">Opportunities</a></li>
                    </ul>
                </div>
                <div className="box">
                    <form onSubmit={onSubmit}>
                        <h1>Log In</h1>
                        <input id = 'one' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input id = 'two' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <button type='submit'>Log In Chat</button>
                    </form>
                    <button id = 'b1' onClick={googleAuth}>Log In With Google</button>
                </div>
            </div>
        </body>
    {/* <div>
        
        
        <button>Log In With Apple</button>
        <div>Don't have an account? <a href='signUp'>Sign Up</a></div>
    </div> */}
    </html>
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