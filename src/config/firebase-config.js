// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-khxx94X0_dXxnuzLdsMV9-AAVGZpkF8",
  // authDomain: "react-firebase-1885a.firebaseapp.com",
  projectId: "react-firebase-1885a",
  storageBucket: "react-firebase-1885a.appspot.com",
  messagingSenderId: "202931593138",
  appId: "1:202931593138:web:a17d960506245713808eab",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://www.example.com/finishSignUp?cartId=1234",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "example.page.link",
};
