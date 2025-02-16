import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4xvAC0fkdweJKe4Mlt3tOMxu6YyuAH_4",
  authDomain: "project-lms-e59cf.firebaseapp.com",
  projectId: "project-lms-e59cf",
  storageBucket: "project-lms-e59cf.firebasestorage.app",
  messagingSenderId: "536992379439",
  appId: "1:536992379439:web:d435403a91835b417f0cda",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
