'use client'
import { auth, db } from '@/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
    const router = useRouter();
    const[title,setTitle] = useState('')
    const[link,setLink] = useState('')
    const[provider,setProvider] = useState('')
    const[date,setDate] = useState('')
    const[description,setDescription] = useState('')
    const[photoUrl,setPhotoUrl] = useState('')
    const currentDate = new Date();
    let camera = 'https://i.pinimg.com/originals/61/54/18/61541805b3069740ecd60d483741e5bb.jpg';
    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            provider: provider,
            link: link,
            description: description,
            event: title,
            date: date,
            author: auth.currentUser?.email != null?
            auth.currentUser?.email.substring(0,auth.currentUser?.email.indexOf('@')) : "",
            datePosted: (currentDate.getMonth() + 1).toString().padStart(2, '0')+"/"
            +currentDate.getDate().toString().padStart(2, '0')+"/"
            +currentDate.getFullYear().toString().slice(-2)+" "+
            (currentDate.getHours()===0? 12 : currentDate.getHours()>12 ? currentDate.getHours()-12:currentDate.getHours())+":"+
            (currentDate.getMinutes()<10 ? "0"+currentDate.getMinutes() : currentDate.getMinutes())+
            (currentDate.getHours()>12 ? "pm" : "am"),
            photoUrl: photoUrl,
        }
        await setDoc(doc(db, 'posts', title == ''? 'minecraft':title), data).catch((error)=>{
            console.log(error)
        })
        router.push('/opportunity')
    }
    return (
        <html>
            <Head>
                <head>
                <link rel='stylesheet' href='style.css' ></link>
                </head>
            </Head>
            <body>
            <div className="banner">
              <div className="navbar">
                <img src = "../../favicon.ico" className = "logo"></img>
                <ul>
                  <li><a href = "login">Home</a></li>
                  <li><a href = "login">Home</a></li>
                  <li><a href = "#">Home</a></li>
                </ul>
              </div>
              <div id='shareOp'> 
                <h1 id='topShare'>Share Your Opportunity!</h1>
                
                <div id='shareForm'>
                    <form onSubmit={onSubmit}>
                    <img src={photoUrl != '' ? photoUrl: camera} id='shareFormImg'></img>
                        <p >Event Title:<input value={title} onChange={(e) => setTitle(e.target.value)}>
                            </input>
                        </p>
                        <p>Provider:<input value={provider} onChange={(e) => setProvider(e.target.value)}></input></p>
                        <p>Decription:</p>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} id='shareDesc'>hey</textarea>
                        <p>Date Of Event:<input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input></p>
                        <p>Link:<input value={link} onChange={(e) => setLink(e.target.value)}></input></p>
                        <p>Photo Url:<input value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}></input></p>
                        <div id='shareOpSubmit'><button className="shareButton" id='shareButton' type="submit"><span></span>Share Now!</button></div>
                    </form>
                    </div>
                </div>
            </div>
            </body>
        </html>
    )
}