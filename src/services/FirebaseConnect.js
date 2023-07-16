
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2jx8sudavf-08D99Cnn2Hnv3YZm6DBzs",
  authDomain: "wikiwars-atitus.firebaseapp.com",
  projectId: "wikiwars-atitus",
  storageBucket: "wikiwars-atitus.appspot.com",
  messagingSenderId: "363204546554",
  appId: "1:363204546554:web:01460efe2a6d0283359e43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);