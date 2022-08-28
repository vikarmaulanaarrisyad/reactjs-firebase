// import React from 'react'

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4tqXb2q_Dd5B2yF3NYmUbysYLIMxWeNY",
  authDomain: "simple-notes-firebase-754db.firebaseapp.com",
  projectId: "simple-notes-firebase-754db",
  storageBucket: "simple-notes-firebase-754db.appspot.com",
  messagingSenderId: "896380517763",
  appId: "1:896380517763:web:6e6434d312b4eb07c94ab6",
  measurementId: "G-ELWQWC1Q98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const register = createUserWithEmailAndPassword;

// export { app , auth , register}

