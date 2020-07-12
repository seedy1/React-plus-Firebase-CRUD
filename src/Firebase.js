import * as firebase from 'firebase';
import firestorm from 'firebase/firestore';
import exp from "./components/keys";


const  settings = {timestampsInSnapshots: true};

// Your web app's Firebase configuration
const config = {
    // TODO: add all these to .env file

    apiKey: exp.apiKey,
    authDomain: exp.authDomain,
    databaseURL: exp.databaseURL,
    projectId: exp.projectId,
    storageBucket: exp.storageBucket,
    messagingSenderId: exp.messagingSenderId,
    appId: exp.appId,
    measurementId: exp.measurementId
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings(settings);
// firebase.analytics();

export default firebase;