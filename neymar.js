 

var firebaseConfig = {
  apiKey: "AIzaSyCNil30O5tbedpmtO2rjYb5oEycWPsgcaA",
  authDomain: "lista-34a61.firebaseapp.com",
  databaseURL: "https://lista-34a61-default-rtdb.firebaseio.com",
  projectId: "lista-34a61",
  storageBucket: "lista-34a61.appspot.com",
  messagingSenderId: "1053885938781",
  appId: "1:1053885938781:web:bf6adf7feed7be6ddb61b4"
};

firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      //Inicia código
         console.log(firebase_message_id);
         console.log(message_data);
         names = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> " + names + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML +=row;
         //Finaliza código
      } });  }); }
getData();

function send()[
msg=document.getElementById(msg)value;
  firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
document.getElementById(msg).innerHTML=" ";
  
]
function updatelike(mesage_id)
{
button_id=mesage_id;
like = document.getElementById(button_id).value;
update_likes = Number(like) +1;
console.log (update_likes);

firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });




}

function logOut() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = ("index.html") }

 user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      //Inicia código
         console.log(firebase_message_id);
         console.log(message_data);
         names = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> " + names + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML +=row;
         //Finaliza código
      } });  }); }
getData();
function send()
{  msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}

function updateLike(message_id)
{
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updated_likes = Number(like) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logOut()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = ("index.html")
}