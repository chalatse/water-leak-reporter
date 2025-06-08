import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkC91rkf09FqXHB3r2Ert8nf82989u3hA",
  authDomain: "waterleakdetector-35e5e.firebaseapp.com",
  projectId: "waterleakdetector-35e5e",
  storageBucket: "waterleakdetector-35e5e.firebasestorage.app",
  messagingSenderId: "432306698734",
  appId: "1:432306698734:web:768b647681eddffe9d36ff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
