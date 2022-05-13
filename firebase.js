// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmWl2vCTkjGAb0ubFdkag0UuqPh28ciAM",
  authDomain: "sistemadebarbearia.firebaseapp.com",
  databaseURL: "https://sistemadebarbearia-default-rtdb.firebaseio.com",
  projectId: "sistemadebarbearia",
  storageBucket: "sistemadebarbearia.appspot.com",
  messagingSenderId: "1048857684252",
  appId: "1:1048857684252:web:b780b0b076221a3556f2d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;