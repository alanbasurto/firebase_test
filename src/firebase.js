import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYMUCDn50Sb6X24mr27YiWW0jNqApFoBo",
  authDomain: "alantestweb2.firebaseapp.com",
  databaseURL: "https://alantestweb2-default-rtdb.firebaseio.com",
  projectId: "alantestweb2",
  storageBucket: "alantestweb2.appspot.com",
  messagingSenderId: "21264586232",
  appId: "1:21264586232:web:aae89e436bc6185dfbb20d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app);
const rtdb = getDatabase(app);
const db = getFirestore(app);

export {auth,storage,rtdb,db}