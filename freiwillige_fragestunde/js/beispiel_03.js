// Neu: Legende einbauen

// Variablen festlegen
let aktuelles_Bild;
let aktuelles_Bild_alt;
let aktuelles_Bild_legende;

// aktuelles Bild herausfinden
aktuelles_Bild = document.querySelector("#bild_pokemon").src;
aktuelles_Bild_alt = document.querySelector("#bild_pokemon").alt;
aktuelles_Bild_legende = document.querySelector("#text_pokemon").innerHTML;

// Ereignis: Wenn mit Maus über Bild
// siehe https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
document.querySelector("#bild_pokemon").onmouseover = function() {
  document.querySelector("#bild_pokemon").src="img/caterpie.gif";
  document.querySelector("#bild_pokemon").alt="Bild Caterpie";
  document.querySelector("#text_pokemon").innerHTML="Das ist <b>Caterpie</b>";
}
// Ereignis: Wenn mit Maus aus Bild
document.querySelector("#bild_pokemon").onmouseout = function() {
  document.querySelector("#bild_pokemon").src=aktuelles_Bild;
  document.querySelector("#bild_pokemon").alt=aktuelles_Bild_alt;
  document.querySelector("#text_pokemon").innerHTML=aktuelles_Bild_legende
}
