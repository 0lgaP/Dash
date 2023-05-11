import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyALdyB9Q0O1or1I2BUge5BXtFaO0LsE_qw",
  authDomain: "dash-1fdb7.firebaseapp.com",
  projectId: "dash-1fdb7",
  storageBucket: "dash-1fdb7.appspot.com",
  messagingSenderId: "392120523754",
  appId: "1:392120523754:web:fc16751490e1edb236b093"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = getAuth();
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp };
