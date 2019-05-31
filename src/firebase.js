import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';


const config = {
    apiKey: "AIzaSyAQTeKt6k_rwqrAko0SrhbBvGgpyIdGYiY",
    authDomain: "usertest-2b112.firebaseapp.com",
    databaseURL: "https://usertest-2b112.firebaseio.com",
    projectId: "usertest-2b112",
    storageBucket: "usertest-2b112.appspot.com",
    messagingSenderId: "197584488025",
    appId: "1:197584488025:web:b608b0350881237d"
  };

  app.initializeApp(config);

export default app;