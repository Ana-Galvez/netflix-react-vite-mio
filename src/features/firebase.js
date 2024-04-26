import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAVXTUcYEaG6c3iApfkdNax44A6DG4PKKM",
  authDomain: "clonenetflixreactcodo.firebaseapp.com",
  projectId: "clonenetflixreactcodo",
  storageBucket: "clonenetflixreactcodo.appspot.com",
  messagingSenderId: "410208043124",
  appId: "1:410208043124:web:67b1379622904081d91121"
};

const firebaseNetflix = initializeApp(firebaseConfig);
const db = getFirestore(firebaseNetflix);
const auth = getAuth(firebaseNetflix);

export { auth };
export default db;