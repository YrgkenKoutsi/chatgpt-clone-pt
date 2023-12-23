import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy2m1Tz_Legz4-uZhLJuTIocDenCCv9UQ",
  authDomain: "chatgpt-clone-35806.firebaseapp.com",
  projectId: "chatgpt-clone-35806",
  storageBucket: "chatgpt-clone-35806.appspot.com",
  messagingSenderId: "977819804155",
  appId: "1:977819804155:web:8fdebcbc467b33b8c3ab5e"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig); // singleton pattern encoding
const db = getFirestore(app)

export { db }