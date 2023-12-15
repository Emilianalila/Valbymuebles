
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey:"AIzaSyBLk0i0unEoSAAACAHFx8r3OvFOYZerqzY",
  authDomain: "tienda-valbymuebles.firebaseapp.com",
  projectId: "tienda-valbymuebles",
  storageBucket: "tienda-valbymuebles.appspot.com",
  messagingSenderId: "365794963971",
  appId: "1:365794963971:web:fb0d95d1ea1316d3789436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);






//process.env.REACT_APP_FIREBASE_API_KEY