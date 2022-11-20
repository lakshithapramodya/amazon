// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD3csCu-t2dadHvjN196zKoAMxVtsr25A",
  authDomain: "fir-43bdf.firebaseapp.com",
  projectId: "fir-43bdf",
  storageBucket: "fir-43bdf.appspot.com",
  messagingSenderId: "465106707669",
  appId: "1:465106707669:web:26a6fffad100b033c12e5c",
  measurementId: "G-GV5VS8LYZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
