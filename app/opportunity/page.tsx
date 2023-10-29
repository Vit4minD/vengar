import { db } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import AuthDetails from '../(userAuthorization)/components/AuthDetails';

type postDoc = {
    provider: string;
    link: string;
    description: string;
    event: string;
    date: string;
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
      });
    });
  
    return documents;
  }

export default async function Home() {
    const posts = getAllDocuments('posts');
    return (
        <>
          <h1>Opportunities</h1>
          <ul>
            {
                (await posts).map((post, index) => (
                    <>
                        <li key={index}>
                            <div>{post.event+" "+post.date}</div>
                            <div>{post.description}</div>
                            <div>{post.provider}</div>
                            <div>{post.link}</div>
                        </li>
                    </>
                ))
            }
          </ul>
        </>
      );
 }