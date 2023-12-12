import {auth} from "./firebase"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
auth.useDeviceLanguage();
const signinflow = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode)
        console.log(errorMessage)
        console.log(credential)
        });
}


const GoogleAuth = () => {
  return (
    <>
      <button onClick={signinflow}>GoogleAuth</button>
    </>
  )
}

export default GoogleAuth