import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC8H9FPcZ9jwMs-xxiCbnD4ZFJiZNhvSME",
  authDomain: "firepanda-12f07.firebaseapp.com",
  projectId: "firepanda-12f07",
  storageBucket: "firepanda-12f07.appspot.com",
  messagingSenderId: "1080892993037",
  appId: "1:1080892993037:web:0da3f155cd8e29d5e8af44",
  measurementId: "G-KDGDRP1398"
};

export const app: firebase.app.App = firebase.initializeApp(config);
export const auth: firebase.auth.Auth = firebase.auth();
export const fs: firebase.firestore.Firestore = firebase.firestore();
export const GoogleAuthProvider: firebase.auth.AuthProvider = new firebase.auth.GoogleAuthProvider();
