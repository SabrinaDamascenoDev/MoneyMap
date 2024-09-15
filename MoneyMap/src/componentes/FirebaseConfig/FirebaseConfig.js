
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC8OkMY51zv_7o6YfLaplHoUmoeQUnFI_E",
  authDomain: "moneymap-198ca.firebaseapp.com",
  projectId: "moneymap-198ca",
  storageBucket: "moneymap-198ca.appspot.com",
  messagingSenderId: "922708214331",
  appId: "1:922708214331:web:7183d159c575f4d892121e",
  measurementId: "G-23ZM98M69H"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { auth, analytics,  };
