// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8I_6TFSSAz_IPYFPGRqlOt4vqVJjELYE",
  authDomain: "gptnetflix-f3d2f.firebaseapp.com",
  projectId: "gptnetflix-f3d2f",
  storageBucket: "gptnetflix-f3d2f.appspot.com",
  messagingSenderId: "166888790973",
  appId: "1:166888790973:web:be90429f9952cd2c46d0d4",
  measurementId: "G-D2T1ZW3121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();