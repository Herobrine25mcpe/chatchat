import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgHrXPivUYy-_2roI5nkGKLTSucoiWlWo",
  authDomain: "chatchat-b0f2b.firebaseapp.com",
  projectId: "chatchat-b0f2b",
  storageBucket: "chatchat-b0f2b.appspot.com",
  messagingSenderId: "723266907166",
  appId: "1:723266907166:web:c86b08907e6eaeaa02920f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()