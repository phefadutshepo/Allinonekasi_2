// function googleSignIn() {
//   return new Promise((resolve, reject) => {
//     const provider = new GoogleAuthProvider();

//     initialize();

//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         console.log(user);
//         // IdP data available using getAdditionalUserInfo(result)
//         // Listen for changes in user authentication state
//         auth.onAuthStateChanged((user) => {
//           if (user) {
//             // User is signed in, you can fetch their data and display the landing page
//             resolve(user);
//           } else {
//             // User is signed out, handle accordingly
//             reject("User signed out");
//           }
//         });
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);

//         reject(error);
//       });
//   });
// }

