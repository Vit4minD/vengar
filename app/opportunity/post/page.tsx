'use client'
import { auth, db } from '@/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Home() {
    const router = useRouter();
    const[title,setTitle] = useState('')
    const[link,setLink] = useState('')
    const[provider,setProvider] = useState('')
    const[date,setDate] = useState('')
    const[description,setDescription] = useState('')
    const currentDate = new Date();

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
            (currentDate.getHours()===0? 12 : currentDate.getHours()-12)+":"+currentDate.getMinutes()+
            (currentDate.getHours()>12 ? "pm" : "am"),
        }
        await setDoc(doc(db, 'posts', title), data)
        router.push('/opportunity')
    }
    return (
        <>
            <h1>Share Your Opportunity!</h1>
            <form onSubmit={onSubmit}>
                <p>Event Title:<input value={title} onChange={(e) => setTitle(e.target.value)}>
                    </input >Provider:<input value={provider} onChange={(e) => setProvider(e.target.value)}></input>
                </p>
                <p>Decription:</p>
                <input value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <p>Date Of Event:<input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input></p>
                <p>Link:<input value={link} onChange={(e) => setLink(e.target.value)}></input></p>
                <button type="submit"><span></span>Share Now!</button>
            </form>
        </>
    )
}