import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyBO8Gd1FAQHUzyIv6RIGoGdtsxtx00A_CE",
  authDomain: "photo-website-52184.firebaseapp.com",
  databaseURL: "https://photo-website-52184.firebaseio.com",
  projectId: "photo-website-52184",
  storageBucket: "photo-website-52184.appspot.com",
  messagingSenderId: "102989316981",
  appId: "1:102989316981:web:0e1d8a4bf01229ae83c93c",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const auth = firebase.auth()

export { projectStorage, projectFirestore, timestamp, auth }
