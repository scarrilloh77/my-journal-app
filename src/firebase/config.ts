import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAzDKfyg9_N5nk7q9E8Gqi7RbhfrM6lPIw",
  authDomain: "react-cursos-6b6ee.firebaseapp.com",
  projectId: "react-cursos-6b6ee",
  storageBucket: "react-cursos-6b6ee.appspot.com",
  messagingSenderId: "299172023219",
  appId: "1:299172023219:web:109ebfc1d32217f2fc99c6",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
