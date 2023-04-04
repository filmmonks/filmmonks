// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_apiKey,
  authDomain: process.env.REACT_authDomain,
  projectId: process.env.REACT_projectId,
  storageBucket: process.env.REACT_storageBucket,
  messagingSenderId: process.env.REACT_messagingSenderId,
  appId: process.env.REACT_appId,
  measurementId: process.env.REACT_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
