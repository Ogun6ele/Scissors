// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvYHC9HzAqmPUb1RubEYr7b-uvEc0xoHs",
  authDomain: "scissors-3d42a.firebaseapp.com",
  projectId: "scissors-3d42a",
  storageBucket: "scissors-3d42a.appspot.com",
  messagingSenderId: "447800851711",
  appId: "1:447800851711:web:ef8c4db4cc7a6873dba0ca",
  measurementId: "G-42XETNVM0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, app };