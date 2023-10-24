// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU1oWuSMu3yIexhs4CAQI6ueeb2jFkMCs",
  authDomain: "food-app-deliver.firebaseapp.com",
  projectId: "food-app-deliver",
  storageBucket: "food-app-deliver.appspot.com",
  messagingSenderId: "440893870548",
  appId: "1:440893870548:web:1958175b9d177b7aaa0641",
  measurementId: "G-XL2R1Y6P1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();