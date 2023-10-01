// Import the functions you need from the SDKs you need
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




function googleSignIn() {
    const provider = new GoogleAuthProvider();

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
    
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
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

    export { googleSignIn };

    
// function emailPasswordSign() {
    
//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries

//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//     apiKey: "AIzaSyCvBPA8yqur9xxyB0YuG6rZR8E-61VorEk",
//     authDomain: "allinonekasi-2e326.firebaseapp.com",
//     projectId: "allinonekasi-2e326",
//     storageBucket: "allinonekasi-2e326.appspot.com",
//     messagingSenderId: "282343794487",
//     appId: "1:282343794487:web:e954dae8bf2b4791c71cb2",
//     measurementId: "G-7YZHV742ZS"
//     };

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);

//     // Sign up a new user
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//     // User registered successfully
//     const user = userCredential.user;
//     })
//     .catch((error) => {
//     // Handle registration errors
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     });

//     // Sign in an existing user
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//     // User signed in successfully
//     const user = userCredential.user;
//     })
//     .catch((error) => {
//     // Handle sign-in errors
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     });

//     }
