/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA57yZfClGP3OyySbGZAQhESI_A9ZIDPQA",
    authDomain: "maragewebsit.firebaseapp.com",
    projectId: "maragewebsit",
    storageBucket: "maragewebsit.appspot.com",
    messagingSenderId: "190890688530",
    appId: "1:190890688530:web:e42e73aca010a7702358cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app