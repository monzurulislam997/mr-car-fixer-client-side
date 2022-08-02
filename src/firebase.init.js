// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize e
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBB5ffTPH6jVyBazguu2_5FmU0we2D3kyc",
//   authDomain: "mr-car-fixer.firebaseapp.com",
//   projectId: "mr-car-fixer",
//   storageBucket: "mr-car-fixer.appspot.com",
//   messagingSenderId: "632577866694",
//   appId: "1:632577866694:web:3d08f7ef715de573ebd0c7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);