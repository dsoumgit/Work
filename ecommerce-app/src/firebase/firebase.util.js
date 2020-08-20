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

// function to check and create a user in the database 
// this is an async function 
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // check the user if doesn't exist
    if (!userAuth) return; // return nothing
    
    // if exists, using document reference object to store uid (uid is unique for each gmail account)
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // check 
    if (!snapShot.exists) {
        // create it and we have to use document reference object 
        // destructing from user auth 
        const { displayName, email } = userAuth;
        // store created date 
        const createdAt = new Date();

        // store in the database 
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating a user', error.message);
        }
    }

    return userRef;
}

// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();

// export it so we can use when it deals with authentication
export const auth = firebase.auth();    
// firestone for database 
export const firestore = firebase.firestore();

// access the auth class 
const provider = new firebase.auth.GoogleAuthProvider();
// parameters 
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;