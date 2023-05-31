// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKwP1kVxrCh6yHhBtlVcNdaW2zZqCjhis",
  authDomain: "eugene-52f8c.firebaseapp.com",
  projectId: "eugene-52f8c",
  storageBucket: "eugene-52f8c.appspot.com",
  messagingSenderId: "441848504952",
  appId: "1:441848504952:web:0a2755ce43dd8f3a46438d",
  measurementId: "G-1BS6EDXF13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
