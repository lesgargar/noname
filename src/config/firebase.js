
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmqXTO0Q_Cc8wYHrLV_ov7dhnVNLW8Mng",
  authDomain: "noname-cf490.firebaseapp.com",
  projectId: "noname-cf490",
  storageBucket: "noname-cf490.appspot.com",
  messagingSenderId: "924561572233",
  appId: "1:924561572233:web:73ea1e5bd33bcd8a4de158"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 