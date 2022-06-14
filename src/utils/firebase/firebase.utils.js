import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyATG6WW5l4ylsgNkO-wlo45F2uQLhYUCQg",
  authDomain: "e-boutique-db.firebaseapp.com",
  projectId: "e-boutique-db",
  storageBucket: "e-boutique-db.appspot.com",
  messagingSenderId: "125296374929",
  appId: "1:125296374929:web:5d48a9b9eb5d6f65edbb30"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);