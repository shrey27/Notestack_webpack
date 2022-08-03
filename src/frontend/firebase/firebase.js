import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsUx8D0hKtJWaFuJcCCfX8l8tkaLV66dE",
  storageBucket: "neogcamp-ce308.appspot.com",
  projectId: "neogcamp-ce308",
  authDomain: "neogcamp-ce308.firebaseapp.com",
  messagingSenderId: "436647397068",
  appId: "1:436647397068:web:14e2d54344bcfe86a2a469",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const userPostCollection = "userPostCollection";
export const postCollection = "postCollection";
