// Import the functions you need from the SDKs you need
 // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDN_awI-XQC7VJLmoDRoy7GTNS0cadVY5U",
    authDomain: "kwitter-d52b7.firebaseapp.com",
    databaseURL:"https://kwitter-d52b7-default-rtdb.firebaseio.com/",
    projectId: "kwitter-d52b7",
    storageBucket: "kwitter-d52b7.appspot.com",
    messagingSenderId: "621789878674",
    appId: "1:621789878674:web:4173e8408c93435309c94b",
    measurementId: "G-HJHPZW39VQ"
  };

  firebase.initializeApp(firebaseConfig);

  function send(){
    msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
     name:user_name,
     message : msg,
     like:0
   });

   document.getElementById("msg").value="";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
   