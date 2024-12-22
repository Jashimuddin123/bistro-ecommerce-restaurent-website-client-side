// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJMJogAb1L-5aTGQ2EbNiEZ22ShF8ftVw",
  authDomain: "bistro-ecommerce-website-d3fcd.firebaseapp.com",
  projectId: "bistro-ecommerce-website-d3fcd",
  storageBucket: "bistro-ecommerce-website-d3fcd.firebasestorage.app",
  messagingSenderId: "397314093379",
  appId: "1:397314093379:web:bfe9b31285219fef447ff6",
  measurementId: "G-Z2V0Q229ET"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
