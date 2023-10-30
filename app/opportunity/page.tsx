import { db } from '@/firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import './style.css'
type postDoc = {
    provider: string;
    link: string;
    description: string;
    event: string;
    date: string;
    author: string;
    datePosted: string,
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
      });
    }); 
    return documents;
  }

export default async function Home() {
    const posts = getAllDocuments('posts');
    return (
        <>
          <h1>Opportunities
            <a href="/opportunity/post"><button><span></span>+</button></a>
          </h1>
          <ul>
            {
                (await posts).map((post, index) => (
                    <>
                        <li key={index}>
                            <div><img src = "./favicon.ico" className = "logo"></img>{post.author}{" "+post.datePosted}</div>
                            <div><a href={post.link}>{post.event}</a></div>
                            <div>{post.description}</div>
                            <div>Provided by: {post.provider}</div>
                            <div>Date: {post.date}</div>
                        </li>
                    </>
                ))
            }
          </ul>
        </>
      );
 }