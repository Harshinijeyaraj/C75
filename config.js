import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCv5Ga_2lLGIjgZUPWRVsFWDaNOWTIzj98",
  authDomain: "wily-615d8.firebaseapp.com",
  projectId: "wily-615d8",
  storageBucket: "wily-615d8.appspot.com",
  messagingSenderId: "924283658069",
  appId: "1:924283658069:web:aad2d84ffaccd82d0cd9dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();