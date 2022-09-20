
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKq9sKzxn4K4K8r7Maz1dK4G2-iqQ_pI4",
  authDomain: "sandrini-reactapp.firebaseapp.com",
  projectId: "sandrini-reactapp",
  storageBucket: "sandrini-reactapp.appspot.com",
  messagingSenderId: "634412250399",
  appId: "1:634412250399:web:03d584c2a433af142fac2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)