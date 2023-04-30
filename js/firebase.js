let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyC2-2zjeKuGi837egPDDlGz3B8cQjLrp1Q",
    authDomain: "blogging-website-9ce80.firebaseapp.com",
    projectId: "blogging-website-9ce80",
    storageBucket: "blogging-website-9ce80.appspot.com",
    messagingSenderId: "99439874538",
    appId: "1:99439874538:web:0464f04f4b2e93c688e293"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();