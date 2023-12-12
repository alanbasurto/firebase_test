import {auth} from "./firebase"
import GoogleAuth from "./GoogleAuth"
import { onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
const signout = () => {
  signOut(auth).then(() => {
  }).catch((error) => {
  });
}
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  if (!user) {
    return (
      <>
        <h1>There is no user information. You can sign in.</h1>
        <GoogleAuth />
      </>
    );
  }

  return (
    <div className="App">
      <h1>{user.displayName}</h1>
      <button onClick={signout}>signOut</button>
    </div>
  );
};

export default App

