// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgviemXsunFVP2qvWFkS5jRoZb4aiSQM8",
  authDomain: "netflixgpt-a7caa.firebaseapp.com",
  projectId: "netflixgpt-a7caa",
  storageBucket: "netflixgpt-a7caa.appspot.com",
  messagingSenderId: "854518590019",
  appId: "1:854518590019:web:09a10bc3c15bd51403c2f6",
  measurementId: "G-KD75C3VYE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();