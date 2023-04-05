import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9p9uQxtZaI14DSm4647OI_m0hkTKCBjM",
  authDomain: "monkhood-be-a8fdf.firebaseapp.com",
  projectId: "monkhood-be-a8fdf",
  storageBucket: "monkhood-be-a8fdf.appspot.com",
  messagingSenderId: "562643999779",
  appId: "1:562643999779:web:6e175bc578c8b60cdb2596",
  measurementId: "G-Y7H5QQ84VL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
const db = getFirestore(app);
export default db;
