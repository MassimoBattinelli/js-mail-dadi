var email = prompt("Inserisci la tua mail");
var mailAccepted = ["mail@gmail.com", "massimo.battinelli@email.it", "email@gmail.com"];

var login = false;

for (var i = 0; i < mailAccepted.length; i++) {
  if (email === mailAccepted[i]) {
    login = true;
  }
}

if (login == true) {
  alert("Accesso confermato");
} else {
  alert("Accesso negato");
}