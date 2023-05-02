// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUSVhVKRG2j3JiqfK237fTcIrtphA3Gf0",
  authDomain: "chef-recipe-hunter-379ee.firebaseapp.com",
  projectId: "chef-recipe-hunter-379ee",
  storageBucket: "chef-recipe-hunter-379ee.appspot.com",
  messagingSenderId: "239478709197",
  appId: "1:239478709197:web:154f5fd49bab8bfd9e0284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;