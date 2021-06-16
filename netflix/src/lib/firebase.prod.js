import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDKdg4HpKUgIAK_Y2BUR_T-xXJVGzQ5P-c",
    authDomain: "netflix-01-28a9c.firebaseapp.com",
    projectId: "netflix-01-28a9c",
    storageBucket: "netflix-01-28a9c.appspot.com",
    messagingSenderId: "673710210220",
    appId: "1:673710210220:web:7819b77a3b4d73d53d3309"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
//seedDatabase(firebase);
export { firebase };