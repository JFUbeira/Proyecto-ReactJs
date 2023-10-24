/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPuxI2RI10JBnuj7FgSh1RliuJ3MQTmdY",
    authDomain: "ecommerce-juanubeira.firebaseapp.com",
    projectId: "ecommerce-juanubeira",
    storageBucket: "ecommerce-juanubeira.appspot.com",
    messagingSenderId: "735692270509",
    appId: "1:735692270509:web:12ae5c696d513c7c10cf24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
