import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3hUy7sHabasyVQ3DAyhcupB2Y6xcY66E",
  authDomain: "livestreamevents-108e0.firebaseapp.com",
  databaseURL: "https://livestreamevents-108e0.firebaseio.com",
  projectId: "livestreamevents-108e0",
  storageBucket: "livestreamevents-108e0.appspot.com",
  messagingSenderId: "545602863143"

});

export const db = firebaseApp.firestore();
