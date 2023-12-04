// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'  
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7HUcEtOgSJ9a_dse0IDfL0vX-BqfPd3o",
  authDomain: "live-data-lab.firebaseapp.com",
  projectId: "live-data-lab",
  storageBucket: "live-data-lab.appspot.com",
  messagingSenderId: "375934716576",
  appId: "1:375934716576:web:5c6c7cb4aabc1b16dc57c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firesbase deploy