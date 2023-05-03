

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




user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "mbappe.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="mbappe.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }



      
