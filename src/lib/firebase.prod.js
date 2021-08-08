import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCxqqMyPPgrVKv1qG8vCuGK5Krah9h0IGw",
    authDomain: "netflix-clone-2c10e.firebaseapp.com",
    projectId: "netflix-clone-2c10e",
    storageBucket: "netflix-clone-2c10e.appspot.com",
    messagingSenderId: "342908096297",
    appId: "1:342908096297:web:2904c53a4d88609c397138"
};
const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
/*
apiKey: "AIzaSyCgOg6OkuXmAijepy6OQE9G0KB7PXuKIAI",
    authDomain: "netflix-clone-a5119.firebaseapp.com",
    projectId: "netflix-clone-a5119",
    storageBucket: "netflix-clone-a5119.appspot.com",
    messagingSenderId: "33107257461",
    appId: "1:33107257461:web:8821401cf353c05bed703c"
};
*/
/*
sparsh
apiKey: "AIzaSyCxqqMyPPgrVKv1qG8vCuGK5Krah9h0IGw",
    authDomain: "netflix-clone-2c10e.firebaseapp.com",
    projectId: "netflix-clone-2c10e",
    storageBucket: "netflix-clone-2c10e.appspot.com",
    messagingSenderId: "342908096297",
    appId: "1:342908096297:web:2904c53a4d88609c397138"
*/