// Neu
// Variablen festlegen
let aktuelles_Bild;
let aktuelles_Bild_alt;

// aktuelles Bild herausfinden
aktuelles_Bild = document.querySelector("#bild_pokemon").src;
aktuelles_Bild_alt = document.querySelector("#bild_pokemon").alt;
// Ende neu

// Ereignis: Wenn mit Maus über Bild
// siehe https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
document.querySelector("#bild_pokemon").onmouseover = function() {
  document.querySelector("#bild_pokemon").src="img/caterpie.gif";
  document.querySelector("#bild_pokemon").alt="Bild Caterpie";
}
// Ereignis: Wenn mit Maus aus Bild
document.querySelector("#bild_pokemon").onmouseout = function() {
  document.querySelector("#bild_pokemon").src=aktuelles_Bild;
  document.querySelector("#bild_pokemon").alt=aktuelles_Bild_alt;
}
