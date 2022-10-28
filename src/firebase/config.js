import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBjjqTay2LPcONewHfvNamVckPqQdKSsIo",
  authDomain: "cooking-app-2f359.firebaseapp.com",
  projectId: "cooking-app-2f359",
  storageBucket: "cooking-app-2f359.appspot.com",
  messagingSenderId: "903070578530",
  appId: "1:903070578530:web:951f7ac36376461c29de3b"
};

  firebase.initializeApp(firebaseConfig)

const projectfirestore=firebase.firestore()
const projectauth=firebase.auth()

const timestamp=firebase.firestore.Timestamp



export {projectfirestore,projectauth,timestamp}