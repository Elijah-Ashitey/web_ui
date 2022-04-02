
import {  initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAWKTd91eODhztBh63lxnQqyO4zHoPr68k",
    authDomain: "rent-d25cd.firebaseapp.com",
    databaseURL: "https://rent-d25cd.firebaseio.com",
    projectId: "rent-d25cd",
    storageBucket: "rent-d25cd.appspot.com",
    messagingSenderId: "545934919599",
    appId: "1:545934919599:web:e2f3ab771281be1eba915a",
    measurementId: "G-K6CC7H75PV",
  };


  // // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);