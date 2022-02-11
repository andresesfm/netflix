import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCQthp3D9Z-86wr8YVfRdMIexFpchDe43E",
    authDomain: "fir-3eee8.firebaseapp.com",
    projectId: "fir-3eee8",
    storageBucket: "fir-3eee8.appspot.com",
    messagingSenderId: "973296400959",
    appId: "1:973296400959:web:9ab4fa67ee01883927568a"
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore()
const auth = app.auth()
export { app as firebase, firestore, auth }