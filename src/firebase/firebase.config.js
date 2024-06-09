// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA19fYlLgkMFcQuZXcvrIHc4CjXAkEixoU",
    authDomain: "react-ecommerce-website-auth.firebaseapp.com",
    projectId: "react-ecommerce-website-auth",
    storageBucket: "react-ecommerce-website-auth.appspot.com",
    messagingSenderId: "372064301595",
    appId: "1:372064301595:web:cc26f8af7de2d8418fbebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;