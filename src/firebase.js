// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyChHyQtMQ3O3idG7usyABf-H2cGai9yDng',
  authDomain: 'technext-96.firebaseapp.com',
  projectId: 'technext-96',
  storageBucket: 'technext-96.firebasestorage.app',
  messagingSenderId: '245581543117',
  appId: '1:245581543117:web:e13171dd847d4f7a6d1b84',
  measurementId: 'G-Z6FJE81YL9'
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Firebase Authentication

export {db, auth}; // Export Firestore instance
