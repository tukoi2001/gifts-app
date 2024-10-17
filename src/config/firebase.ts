import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCX6-6-crMlEVagvYqo7W4bUVO-kWx86F4',
  authDomain: 'images-df60c.firebaseapp.com',
  projectId: 'images-df60c',
  storageBucket: 'images-df60c.appspot.com',
  messagingSenderId: '354904748220',
  appId: '1:354904748220:web:4c51f3454942d42038a0b9',
  measurementId: 'G-YJ6X9P2NV0',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const analytics = getAnalytics(app);

export { auth, db, analytics };
