// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8OkMY51zv_7o6YfLaplHoUmoeQUnFI_E",
  authDomain: "moneymap-198ca.firebaseapp.com",
  projectId: "moneymap-198ca",
  storageBucket: "moneymap-198ca.appspot.com",
  messagingSenderId: "922708214331",
  appId: "1:922708214331:web:7183d159c575f4d892121e",
  measurementId: "G-23ZM98M69H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Initialize Analytics only if supported
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { auth, analytics };
