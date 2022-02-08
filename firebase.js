// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSirqCvrYgOXU58wBUztzGUm9_mjkZkmA",
  authDomain: "uber-clone-b13c9.firebaseapp.com",
  projectId: "uber-clone-b13c9",
  storageBucket: "uber-clone-b13c9.appspot.com",
  messagingSenderId: "415083311230",
  appId: "1:415083311230:web:a25e7cf7110a029eac282f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export {app,provider,auth}
