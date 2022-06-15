// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV157S9ZZMJmafdIkTFXjZIttXQ8r32X4",
  authDomain: "ropapp-tomaz.firebaseapp.com",
  projectId: "ropapp-tomaz",
  storageBucket: "ropapp-tomaz.appspot.com",
  messagingSenderId: "774507580443",
  appId: "1:774507580443:web:5dcd4bf1ead96ef2377cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
