import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "my-ecommerce-802ba.firebaseapp.com",
  projectId: "my-ecommerce-802ba",
  storageBucket: "my-ecommerce-802ba.appspot.com",
  messagingSenderId: "201370360664",
  appId: "1:201370360664:web:3041f17e8f3008e649e32d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);