import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";

export default function Home() {
  return (
    <>
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </>
  )
}