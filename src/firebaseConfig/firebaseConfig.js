import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBse44nPuQvCh_D9gwN9e2VgjqBR4UmFPg",
  authDomain: "foodapp-94fc1.firebaseapp.com",
  projectId: "foodapp-94fc1",
  storageBucket: "foodapp-94fc1.appspot.com",
  messagingSenderId: "909283967118",
  appId: "1:909283967118:web:15888d671a197e3d12c9df",
  measurementId: "G-KZCWBTGFF5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);