var button = document.getElementById("btn")
button.addEventListener('click',
function() {

    var numberPlayer = Math.floor(Math.random() * 6 + 1);
    var numberComputer = Math.floor(Math.random() * 6 + 1);
        
    document.getElementById("numberPlayer").innerHTML = numberPlayer;
    document.getElementById("numberComputer").innerHTML = numberComputer;

    if (numberPlayer > numberComputer) {
         winner.innerHTML = "Hai vinto!";
    } else if (numberPlayer == numberComputer) {
        winner.innerHTML = "Avete pareggiato!";
      } else {
         winner.innerHTML = "Hai perso!";
        }
    }
)
