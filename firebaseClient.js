// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCU-_81XNZ_Ju7qzc_rOpc4dNZjHRTS5Kw",
    authDomain: "agency-matcher.firebaseapp.com",
    projectId: "agency-matcher",
    storageBucket: "agency-matcher.appspot.com",
    messagingSenderId: "433561373035",
    appId: "1:433561373035:web:fe15ab8f63b9e57b11a42e",
    measurementId: "G-WM8H9CHNWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
