import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const auth = firebase.auth()

export { projectStorage, projectFirestore, timestamp, auth }
