// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyDro0K7FBTRza0-KQ3RYha_lDrOEkhxklI",
      authDomain: "random-d2f3a.firebaseapp.com",
      databaseURL: "https://random-d2f3a-default-rtdb.firebaseio.com",
      projectId: "random-d2f3a",
      storageBucket: "random-d2f3a.appspot.com",
      messagingSenderId: "734732497873",
      appId: "1:734732497873:web:96617669c96ec3413a26f0",
      measurementId: "${config.measurementId}"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    firebase.database().ref("/").child(user_name).update({
      purpose : "User Name"
});  

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
  
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);
       window.location = "lets_chat_room.html";
       
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML +=row;
   //End code
   });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_chat_chatterbox.html";
}


