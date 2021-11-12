//LINK FROM FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyCacMJ1VKXhNLH-Sd7vEvcaX8ZCIHYCwcE",
      authDomain: "kwitter-project-6010b.firebaseapp.com",
      databaseURL: "https://kwitter-project-6010b-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-6010b",
      storageBucket: "kwitter-project-6010b.appspot.com",
      messagingSenderId: "774165274437",
      appId: "1:774165274437:web:3a82c596e5d5c29aae282c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

userName = localStorage.getItem("userName");
document.getElementById("user_name").innerHTML = "Welcome "+userName+"!";
//addRoom()
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}

function log_out(){
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
       document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });
   });
}
getData();

function redirectToRoomName(names){
      localStorage.setItem("roomName ", names);
      window.location = "kwitter_page.html";
}