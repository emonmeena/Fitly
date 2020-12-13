import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvZAiKdg4NJOqxyMqdbyS8jWdCABEoS5o",
  authDomain: "fitly-is-awesome.firebaseapp.com",
  databaseURL: "https://fitly-is-awesome.firebaseio.com",
  projectId: "fitly-is-awesome",
  storageBucket: "fitly-is-awesome.appspot.com",
  messagingSenderId: "716509400246",
  appId: "1:716509400246:web:a5e976a2e13ce7e75eaa17",
  measurementId: "G-B35LEB5T6Y",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);