import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyANX6lQpWz0MxqECqVCOxaLfCGvKxS53S0",
    authDomain: "university-cafe.firebaseapp.com",
    databaseURL: "https://university-cafe.firebaseio.com",
    projectId: "university-cafe",
    storageBucket: "university-cafe.appspot.com",
    messagingSenderId: "300279181194",
    appId: "1:300279181194:web:b31020494a3f387aa8e273",
    measurementId: "G-G9CSSBLHDQ"
  };
export default firebase.initializeApp(firebaseConfig);