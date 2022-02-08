import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDpkPjlU4pq6GxCLe8LKaUl03gr2kum6ls",
    authDomain: "fooddelivery-4fc29.firebaseapp.com",
    projectId: "fooddelivery-4fc29",
    storageBucket: "fooddelivery-4fc29.appspot.com",
    messagingSenderId: "978309215692",
    appId: "1:978309215692:web:92ca3f63503efdadac5969"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)