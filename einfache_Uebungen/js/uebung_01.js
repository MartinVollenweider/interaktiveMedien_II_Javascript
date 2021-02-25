// Variablen festlegen
let derName;

derName = prompt ("Ihr Name:") + ", willkommen zum JavaScript-Kurs!";

window.addEventListener("load", function() {
  document.querySelector("#titel").textContent = derName;
});