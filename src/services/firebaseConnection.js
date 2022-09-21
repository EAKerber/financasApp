import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCQntw8f8nqJAQPQabfv_-_7ZJKqJSXNew",
    authDomain: "financasapp-c76cf.firebaseapp.com",
    databaseURL: "https://financasapp-c76cf-default-rtdb.firebaseio.com",
    projectId: "financasapp-c76cf",
    storageBucket: "financasapp-c76cf.appspot.com",
    messagingSenderId: "434447162161",
    appId: "1:434447162161:web:20b5744481761a7057ae10"
  };
  
// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

