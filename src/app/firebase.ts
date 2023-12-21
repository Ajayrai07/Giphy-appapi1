import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQwxeTDgoIL8OsB9ddIjxcVu47amkyhV8",
  authDomain: "giphy-app-3f6ff.firebaseapp.com",
  projectId: "giphy-app-3f6ff",
  storageBucket: "giphy-app-3f6ff.appspot.com",
  messagingSenderId: "440142589637",
  appId: "1:440142589637:web:c43010d725a782d7590aac"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
