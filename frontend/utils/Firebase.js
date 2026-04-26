import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "onekart-68f4b.firebaseapp.com",
  projectId: "onekart-68f4b",
  storageBucket: "onekart-68f4b.firebasestorage.app",
  messagingSenderId: "472477184053",
  appId: "1:472477184053:web:fb57de2a35c70027ab817c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};