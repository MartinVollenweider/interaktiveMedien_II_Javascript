// Variablen festlegen
let derArray = [];

for (let i = 0; i < 5; i++){
    derArray[i] = prompt("Geben Sie einen beliebigen Wert ein.");
}

window.addEventListener("load", function() {
  document.querySelector("#titel").textContent = "Ergebnis: " + derArray;
});