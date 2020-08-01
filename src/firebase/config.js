import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyAfAw7Xnh8yKx4v_aur36GJaAhGBlCMMUY",
  authDomain: "vikalp-website.firebaseapp.com",
  databaseURL: "https://vikalp-website.firebaseio.com",
  projectId: "vikalp-website",
  storageBucket: "vikalp-website.appspot.com",
  messagingSenderId: "983519870122",
  appId: "1:983519870122:web:6db3abbeae5e5971d2a4d3",
  measurementId: "G-FH5LRK8JBE",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const auth = firebase.auth()

export { projectStorage, projectFirestore, timestamp, auth }
