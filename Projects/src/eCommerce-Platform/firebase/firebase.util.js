import firebase from 'firebase/app';    // we want to load only the one we need 
// Note: we always need 'firebase' keyword above to attach it 
import 'firebase/firebase-firestore';    // database
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAgRX30nKWWzLpKudkTaY8XAtd1uLPpMGU",
    authDomain: "ecommerce-db-b6d43.firebaseapp.com",
    databaseURL: "https://ecommerce-db-b6d43.firebaseio.com",
    projectId: "ecommerce-db-b6d43",
    storageBucket: "ecommerce-db-b6d43.appspot.com",
    messagingSenderId: "469441906638",
    appId: "1:469441906638:web:7f9c09e309db0a710c8d9f",
    measurementId: "G-QVCEQ91H7R"
};

// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();

// export it so we can use when it deals with authentication
export const auth = firebase.auth();    
export const firestone = firebase.firestore();

// access the auth class 
const provider = new firebase.auth.GoogleAuthProvider();
// parameters 
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;