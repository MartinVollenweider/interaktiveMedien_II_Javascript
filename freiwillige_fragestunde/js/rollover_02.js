// Neu
// Variablen festlegen
let aktuellesBild;
let aktuellesBildAlt;

// aktuelles Bild herausfinden
aktuellesBild = document.querySelector("#bildPokemon").src;
aktuellesBildAlt = document.querySelector("#bildPokemon").alt;
// Ende neu

// Ereignis: Wenn mit Maus über Bild
// siehe https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
document.querySelector("#bildPokemon").addEventListener("mouseover", function (){
  document.querySelector("#bildPokemon").src="img/caterpie.gif";
  document.querySelector("#bildPokemon").alt="Bild Caterpie";
});
// Ereignis: Wenn mit Maus aus Bild
document.querySelector("#bildPokemon").addEventListener("mouseout", function (){
  document.querySelector("#bildPokemon").src=aktuellesBild;
  document.querySelector("#bildPokemon").alt=aktuellesBildAlt;
});
