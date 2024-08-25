// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhdwxefdGe95GzNNOG3joG0aHdsW0T88",
  authDomain: "futuretech-57f22.firebaseapp.com",
  projectId: "futuretech-57f22",
  storageBucket: "futuretech-57f22.appspot.com",
  messagingSenderId: "352504529396",
  appId: "1:352504529396:web:8df60c49ff9a3d295879a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)