// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM2rXiIxKZbkITZ313b3HjsaPrMEPTMLc",
  authDomain: "webappanhaw.firebaseapp.com",
  projectId: "webappanhaw",
  storageBucket: "webappanhaw.appspot.com",
  messagingSenderId: "228843659127",
  appId: "1:228843659127:web:30d5386bb0c23622d84b72",
  measurementId: "G-D9735826C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
