import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDKASVwuhXTqzCpF_1ucQaAwAmtiz2M6CY",
  authDomain: "realtor-clone-react-7af97.firebaseapp.com",
  projectId: "realtor-clone-react-7af97",
  storageBucket: "realtor-clone-react-7af97.appspot.com",
  messagingSenderId: "683363731719",
  appId: "1:683363731719:web:b3f5261a4ea7e6b328dda2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();