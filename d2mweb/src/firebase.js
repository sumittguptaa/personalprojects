import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDC6JFna26m2EHl8zc0m8xb6S2Mvcx7xxc",
    authDomain: "d2mmall-1217c.firebaseapp.com",
    databaseURL: "https://d2mmall-1217c.firebaseio.com",
    projectId: "d2mmall-1217c",
    storageBucket: "d2mmall-1217c.appspot.com",
    messagingSenderId: "65540140427",
    appId: "1:65540140427:web:d74db1e2a9bf4a0bb6d38e",
    measurementId: "G-SZFL7C3HXY"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;