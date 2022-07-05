import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from 'firebase/auth';

 import {
  getFirestore,
  doc, //to retrieve the document inside firestore
  getDoc, // to read data in the doc
  setDoc, // to set the data in the doc
  collection,
  writeBatch
 } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATG6WW5l4ylsgNkO-wlo45F2uQLhYUCQg",
  authDomain: "e-boutique-db.firebaseapp.com",
  projectId: "e-boutique-db",
  storageBucket: "e-boutique-db.appspot.com",
  messagingSenderId: "125296374929",
  appId: "1:125296374929:web:5d48a9b9eb5d6f65edbb30"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProvider);

//instiating the Firestore db
export const db = getFirestore(); //this db points to the db inside console

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('done');
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
  if(!userAuth) return; //protects the front-end app from the services eg. Firebase it relies on

  const userDocRef = doc(db, 'user', userAuth.uid )

  // console.log(userDocRef)
  const userSnopshot = await getDoc(userDocRef); //checks for ref of the doc in the db
  // console.log(userSnopshot); 
  console.log(userSnopshot.exists()); //checks for data in the doc

  if(!userSnopshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch(error) {
        console.log("Error creating user", error.message);
    }
  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser =  async () => await signOut(auth);

export const onAuthStateChangedHandler = (callback) => onAuthStateChanged(auth, callback);