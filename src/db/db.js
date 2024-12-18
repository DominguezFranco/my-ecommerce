
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6cnWms309UwbK-95Y3mEJoZs0LtTA8pE",
  authDomain: "ecommerce-65115-916c9.firebaseapp.com",
  projectId: "ecommerce-65115-916c9",
  storageBucket: "ecommerce-65115-916c9.firebasestorage.app",
  messagingSenderId: "977356272412",
  appId: "1:977356272412:web:9fd955d15b453972d300d9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db