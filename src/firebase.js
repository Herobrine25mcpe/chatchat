
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCNPjFyhfX6Az8sUzgfJmjbEQ_-Swdsj9g",
  authDomain: "chatchat-86d4f.firebaseapp.com",
  projectId: "chatchat-86d4f",
  storageBucket: "chatchat-86d4f.appspot.com",
  messagingSenderId: "332347573682",
  appId: "1:332347573682:web:c9c8b12ee544ed983790ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()