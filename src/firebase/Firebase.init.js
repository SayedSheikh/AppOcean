// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX_UL2hcpW4oL8migtVR-odu2V6IYnFPk",
  authDomain: "app-ocean-42dc1.firebaseapp.com",
  projectId: "app-ocean-42dc1",
  storageBucket: "app-ocean-42dc1.firebasestorage.app",
  messagingSenderId: "345212509987",
  appId: "1:345212509987:web:55cfe5da94389e3e0ab696",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
