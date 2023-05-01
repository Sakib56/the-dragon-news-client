// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAadDJ3jOfafqYtR-fQqH5BS-zuHLFAyb4",
  authDomain: "the-news-dragon-client-393b1.firebaseapp.com",
  projectId: "the-news-dragon-client-393b1",
  storageBucket: "the-news-dragon-client-393b1.appspot.com",
  messagingSenderId: "628534198067",
  appId: "1:628534198067:web:77f334323e3f2d613fc846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;