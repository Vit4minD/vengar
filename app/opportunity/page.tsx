import { db } from '@/firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Head from 'next/head';
import '../spany.css';
import React from 'react';
import './style1.css'

type postDoc = {
    provider: string;
    link: string;
    description: string;
    event: string;
    date: string;
    author: string;
    datePosted: string;
    photoUrl: string;
}

async function getAllDocuments(collectionName:string) {
    const myQuery = query(collection(db, collectionName), orderBy('datePosted', 'desc'))
    const querySnapshot = await getDocs(myQuery);
    const documents: postDoc[] = [];
  
    querySnapshot.forEach((doc) => {
      documents.push({
        provider: doc.data().provider,
        link: doc.data().link,
        description: doc.data().description,
        event: doc.data().event,
        date: doc.data().date,
        datePosted: doc.data().datePosted,
        author: doc.data().author,
        photoUrl: doc.data().photoUrl,
      });
    }); 
    return documents;
  }

export default async function Home() {
    const posts = getAllDocuments('posts');
    return (
        <html>
          <Head>
            <head>
              <link rel='stylesheet' href='style.css' ></link>
            </head>
          </Head>
          <body>
            <div className="banner" id='scroll25'>
              <div className="navbar">
                <img src = "./favicon.ico" className = "logo"></img>
                <ul>
                  <li><a href = "/">Home</a></li>
                  <li><a href = "/calendar">Calendar</a></li>
                  <li><a href = "/opportunity">Opportunities</a></li>
                </ul>
              </div>
              <div id='addOp'>
                <h1>Opportunities
                  <a href="/opportunity/post"><button id = 'Gar'><span></span>+</button></a>
                  </h1>
              </div>
              <div id='centerPost'>
                  <ul >
                    {
                        (await posts).map((post, index) => (
                          <div className="box" id='posts'>
                                <li key={index} id='postObj'>
                                    <div><img src = "./favicon.ico" id = "postLogo"></img></div>
                                    <div id='postUser' ></div>
                                    <div id='eventDiv'><a id='eventTitle' href={post.link}>{post.event}</a></div>
                                    <div id='photoPost'><img id='imgPost' src ={post.photoUrl}></img></div>
                                    <div id ='descDiv'><p id='desc'>{post.description}</p></div>
                                    <div>Provided by: {post.provider}</div>
                                    <div><p>On Date: {post.date}</p></div>
                                    <div id='postedBy'>{post.author}{" "+post.datePosted}</div>
                                </li>
                            </div>
                        ))
                    }
                  </ul>
                  </div>
            </div>
          </body>
        </html>
      );
 }