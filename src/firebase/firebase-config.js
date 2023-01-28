import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU-OzN51rCxxYN9XqqZh5OVoyoLwVkSZc",
  authDomain: "monkhood-be.firebaseapp.com",
  projectId: "monkhood-be",
  storageBucket: "monkhood-be.appspot.com",
  messagingSenderId: "847243250624",
  appId: "1:847243250624:web:b9dc583616dc7e13e4d625",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
const db = getFirestore(app);
export default db;
