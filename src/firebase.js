import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Firestore import

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // ✅ Firestore uses projectId
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // ✅ optional for templates
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // ✅ optional
  appId: import.meta.env.VITE_FIREBASE_APP_ID // ✅ optional
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ Firestore instance
const auth = getAuth(app);

export { db, auth };
