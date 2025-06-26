import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAixybMDdy1oHxrLsrD7ZDHwUzbDn3mHvg",
  authDomain: "lethargy-3b481.firebaseapp.com",
  projectId: "lethargy-3b481",
  storageBucket: "lethargy-3b481.firebasestorage.app",
  messagingSenderId: "525746281006",
  appId: "1:525746281006:web:444b61d17f361578189dbf",
  measurementId: "G-WX6R51MXMS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);