// Ereignis: Wenn mit Maus über Bild
// siehe https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
document.querySelector("#bild_pokemon").onmouseover = function() {
  document.querySelector("#bild_pokemon").src="img/caterpie.gif";
  document.querySelector("#bild_pokemon").alt="Bild Caterpie";
}
// Ereignis: Wenn mit Maus aus Bild
document.querySelector("#bild_pokemon").onmouseout = function() {
  document.querySelector("#bild_pokemon").src="img/bellsprout.gif";
  document.querySelector("#bild_pokemon").alt="Bild Bellsprout";
}
