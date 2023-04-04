const firebaseConfig = {
    apiKey: "AIzaSyBDyBOMRmqvd4YXrlFPourJsGe6ITrrAC8",
    authDomain: "project94-9a187.firebaseapp.com",
    projectId: "project94-9a187",
    storageBucket: "project94-9a187.appspot.com",
    messagingSenderId: "504953410361",
    appId: "1:504953410361:web:d82ce5724dea64b0040ee8",
    measurementId: "G-NNT7YEC811"
  };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    function addRoom(){
    user_name = document.getFlementByTd(“room”).value;
    firebase.database().ref("/").child(user_name).update()}
    