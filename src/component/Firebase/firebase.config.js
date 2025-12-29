// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI5fTU3ga3RExqQojTYKNBiRmepzByNY0",
  authDomain: "ecotrack-8ed07.firebaseapp.com",
  projectId: "ecotrack-8ed07",
  storageBucket: "ecotrack-8ed07.firebasestorage.app",
  messagingSenderId: "108230549954",
  appId: "1:108230549954:web:f49d44c8c5fb71b08d765b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;