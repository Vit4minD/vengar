import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import Firebase from '../firebase/config'

const firebase = Firebase

export default function Home() {
  return (
    <>
      <SignIn />
      <SignUp />
    </>
  )
}
