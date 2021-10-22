import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBtFv_MSxj5J85lJ2p2TrCfEWtfyfUgXm0",
    authDomain: "tiendacelu-gustavo-dalence.firebaseapp.com",
    projectId: "tiendacelu-gustavo-dalence",
    storageBucket: "tiendacelu-gustavo-dalence.appspot.com",
    messagingSenderId: "307693209152",
    appId: "1:307693209152:web:784f5d887795f8bdf701a5",
    measurementId: "G-ZXB0HGLW7M"
  });
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
