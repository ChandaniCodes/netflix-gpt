// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxdXOSgSmgj5Ge1vxdvsEl7YuWUZLodlU",
  authDomain: "netflixgpt-1e6e3.firebaseapp.com",
  projectId: "netflixgpt-1e6e3",
  storageBucket: "netflixgpt-1e6e3.firebasestorage.app",
  messagingSenderId: "488579614613",
  appId: "1:488579614613:web:7a8ac183f08a9d69f8189c",
  measurementId: "G-YLE5LV26KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// npm install -g firebase-tools

/*
firebase login
firebase init
firebase deploy
*/
