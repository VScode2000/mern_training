// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjnDN8MfPJz4sUHU42msZ2AxgVPB_OWJA",
  authDomain: "mern-cd494.firebaseapp.com",
  databaseURL: "https://mern-cd494-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mern-cd494",
  storageBucket: "mern-cd494.appspot.com",
  messagingSenderId: "184721690036",
  appId: "1:184721690036:web:dfb1933e4e0e5b0e52f6e1",
  measurementId: "G-24VPQNNE39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);