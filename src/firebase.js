
import firebase from "firebase/compat/app";
import "firebase/compat/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAxLOgEU4ivGiBb3Qpr5caWE7nYMg-TpVk",
  authDomain: "auth-dev-f1583.firebaseapp.com",
  projectId: "auth-dev-f1583",
  storageBucket: "auth-dev-f1583.appspot.com",
  messagingSenderId: "840534516429",
  appId: "1:840534516429:web:e05d5f9f741a4ef250ff84"
};


const app =  firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app
