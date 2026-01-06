// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWd0Gl855RcUEYkPuuDkiNgHUeHNGOdhs",
  authDomain: "trustwallet-7b458.firebaseapp.com",
  projectId: "trustwallet-7b458",
  storageBucket: "trustwallet-7b458.firebasestorage.app",
  messagingSenderId: "776989962964",
  appId: "1:776989962964:web:b169f2e341ace0f0ec4141",
  measurementId: "G-4368SSR6W5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };