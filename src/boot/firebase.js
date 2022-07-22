import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: "AIzaSyBsfZwjqp78tWw1k6-qNuIhnhZgn-8f1Xw",
  authDomain: "qwitter-a093a.firebaseapp.com",
  projectId: "qwitter-a093a",
  storageBucket: "qwitter-a093a.appspot.com",
  messagingSenderId: "519420698871",
  appId: "1:519420698871:web:f0dc597f0059a3559633f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
let db = getFirestore(app);


export default db