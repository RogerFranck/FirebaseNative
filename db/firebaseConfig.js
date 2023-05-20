
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl-Tr94UTNMujj5VR7MJHVQLN_ro7Hr_0",
  authDomain: "practica-usuarios-crud-bcda0.firebaseapp.com",
  projectId: "practica-usuarios-crud-bcda0",
  storageBucket: "practica-usuarios-crud-bcda0.appspot.com",
  messagingSenderId: "142084262457",
  appId: "1:142084262457:web:e3ff4f670a6943dd5adbe8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);