// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqkhGQP9gCCkfjjLD793oYx8DUCoJnkwM",
  authDomain: "chat-app-e2841.firebaseapp.com",
  projectId: "chat-app-e2841",
  storageBucket: "chat-app-e2841.appspot.com",
  messagingSenderId: "84597830365",
  appId: "1:84597830365:web:795032b6460818b16da134",
  measurementId: "G-2TXHBBJGNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)