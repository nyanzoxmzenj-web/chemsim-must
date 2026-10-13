
const firebaseConfig = {
  apiKey: "AIzaSyBQupUhS5JBUbAVUcciwg1jB1zwUME_EcU",
  authDomain: "chemsim-must.firebaseapp.com",
  projectId: "chemsim-must",
  storageBucket: "chemsim-must.firebasestorage.app",
  messagingSenderId: "998155299835",
  appId: "1:998155299835:web:2b5cacddfadff54cb7b95e"
};
 
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
 
function firebaseNotConfigured() {
  return firebaseConfig.apiKey.indexOf("PASTE") === 0;
}