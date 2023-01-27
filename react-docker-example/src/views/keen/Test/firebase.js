import firebase from "firebase/app";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8-TuyDrskMx_AgKeqx8PteHzSdEiuulc",
    authDomain: "keeen-img-upload.firebaseapp.com",
    projectId: "keeen-img-upload",
    storageBucket: "keeen-img-upload.appspot.com",
    messagingSenderId: "766967656887",
    appId: "1:766967656887:web:2720ad0c3e222b5b5f7832",
    measurementId: "G-G062SZQQHW"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage, firebase as default}