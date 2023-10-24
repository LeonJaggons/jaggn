// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT_evoE4OQXLlyBtnRVjVQNDyXvgKNpqE",
    authDomain: "jaggn-design.firebaseapp.com",
    projectId: "jaggn-design",
    storageBucket: "jaggn-design.appspot.com",
    messagingSenderId: "864592346832",
    appId: "1:864592346832:web:5c7ee1a9c031986f4ba8d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
