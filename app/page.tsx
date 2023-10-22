import SignIn from "./components/auth/SignIn"
import Firebase from '../firebase/config'

const firebase = Firebase

export default function Home() {
  return (
    <SignIn/>
  )
}
