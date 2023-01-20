// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdOTtohfot9ysM7ektxu7xeBKnd8AlMqE",
  authDomain: "logistic-app-41f8e.firebaseapp.com",
  projectId: "logistic-app-41f8e",
  storageBucket: "logistic-app-41f8e.appspot.com",
  messagingSenderId: "773481154146",
  appId: "1:773481154146:web:cc0fb74fe7b5e60825333b",
  measurementId: "G-TYDEC92XXN",
  databaseURL:
    "https://logistic-app-41f8e-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
export const realDb = getDatabase();
