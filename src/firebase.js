// Import the functions you need from the SDKs you need
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import Landingpage from "./landing";


function initialize() {
  const firebaseConfig = {
    apiKey: "AIzaSyCvBPA8yqur9xxyB0YuG6rZR8E-61VorEk",
    authDomain: "allinonekasi-2e326.firebaseapp.com",
    projectId: "allinonekasi-2e326",
    storageBucket: "allinonekasi-2e326.appspot.com",
    messagingSenderId: "282343794487",
    appId: "1:282343794487:web:e954dae8bf2b4791c71cb2",
    measurementId: "G-7YZHV742ZS"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return app;
}

function googleSignIn() {
    const provider = new GoogleAuthProvider();

    initialize();
    
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // Listen for changes in user authentication state
        auth.onAuthStateChanged((user) => {
          // if (user) {
          //   // User is signed in, you can fetch their data and display the landing page
          //   return true;

          // } else {
          //   // User is signed out, handle accordingly
          //   return false;
          // }
          return true;
        });

    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });}


function fetchUserLandingPage(userID) {
  // Example: Fetch user data from Firestore
  const db = firebase.firestore();
  const userRef = db.collection("users").doc(userID);

  userRef.get().then((doc) => {
    if (doc.exists) {
      // User data found, you can access it using doc.data()
      const userData = doc.data();
      // Render the landing page with user data and history
    } else {
      // User data not found, handle accordingly
    }
  });

} 

    export { googleSignIn };
