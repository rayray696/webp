import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyC9_IZuZtwXjZiPddfIc_vQAYo9hne0fdQ",
  authDomain: "instagram-clone-react-376b6.firebaseapp.com",
  projectId: "instagram-clone-react-376b6",
  storageBucket: "instagram-clone-react-376b6.appspot.com",
  messagingSenderId: "720237134144",
  appId: "1:720237134144:web:0069a95ed604ea80dfbaa5",
  measurementId: "G-XTHY7H5RPP"
  
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage=firebase.storage();
export {db,auth,storage};