'use client'
import { db } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

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
    const querySnapshot = await getDocs(collection(db, collectionName));
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
    const router = useRouter();
    return (
        <>
          <h1>Opportunities
            <button onClick={() => {router.push('/opportunity/addPost')}}>Add Post</button>
          </h1>
          <ul>
            {
                (await posts).map((post, index) => (
                    <>
                        <li key={index}>
                            <div>{post.author+" "+post.datePosted}</div>
                            <div><a href={post.link}>{post.event}</a></div>
                            <div>{post.description}</div>
                            <div>Provided by: {post.provider}</div>
                        </li>
                    </>
                ))
            }
          </ul>
        </>
      );
 }