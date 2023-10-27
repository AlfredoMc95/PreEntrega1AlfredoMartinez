import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdOF4ZYM5GIfOyURG3hEUGYQf6e1wguI8",
  authDomain: "fb-reactstore.firebaseapp.com",
  projectId: "fb-reactstore",
  storageBucket: "fb-reactstore.appspot.com",
  messagingSenderId: "981119015257",
  appId: "1:981119015257:web:c7f750c81e76e285eb1448",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
