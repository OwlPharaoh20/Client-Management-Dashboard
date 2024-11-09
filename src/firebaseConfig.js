// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqcr2eE8ijIrplLZZ5JsPMspQaCtcglMA",
  authDomain: "client-dashboard-b5c3d.firebaseapp.com",
  projectId: "client-dashboard-b5c3d",
  storageBucket: "client-dashboard-b5c3d.firebasestorage.app",
  messagingSenderId: "688172752022",
  appId: "1:688172752022:web:078ad1df47c0dccd5676b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);