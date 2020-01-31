// Neu: Legende einbauen

// Variablen festlegen
let aktuellesBild;
let aktuellesBildAlt;
let aktuellesBildLegende;

// aktuelles Bild herausfinden
aktuellesBild = document.querySelector("#bildPokemon").src;
aktuellesBildAlt = document.querySelector("#bildPokemon").alt;
aktuellesBildLegende = document.querySelector("#textPokemon").innerHTML;

// Ereignis: Wenn mit Maus über Bild
// siehe https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
document.querySelector("#bildPokemon").addEventListener("mouseover", function (){
  document.querySelector("#bildPokemon").src="img/caterpie.gif";
  document.querySelector("#bildPokemon").alt="Bild Caterpie";
  document.querySelector("#textPokemon").innerHTML="Das ist <b>Caterpie</b>";
});
// Ereignis: Wenn mit Maus aus Bild
document.querySelector("#bildPokemon").addEventListener("mouseout", function (){
  document.querySelector("#bildPokemon").src=aktuellesBild;
  document.querySelector("#bildPokemon").alt=aktuellesBildAlt;
  document.querySelector("#textPokemon").innerHTML=aktuellesBildLegende
});
