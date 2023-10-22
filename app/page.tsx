import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import Firebase from '../firebase/config'
import AuthDetails from "./components/AuthDetails"

const firebase = Firebase

export default function Home() {
  return (
    <>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </>
  )
}
