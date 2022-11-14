import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtiZu5o9Apj_slHrhyAQVniCFvM4JBDyg",
  authDomain: "baytershop.firebaseapp.com",
  projectId: "baytershop",
  storageBucket: "baytershop.appspot.com",
  messagingSenderId: "973359775242",
  appId: "1:973359775242:web:f86f40aa26331db19229f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;