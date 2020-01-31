// Neu: Legende einbauen

// Variablen festlegen
let aktuelles_Bild;
let aktuelles_Bild_alt;
let aktuelles_Bild_legende;

// aktuelles Bild herausfinden
aktuelles_Bild = document.querySelector("#bildPokemon").src;
aktuelles_Bild_alt = document.querySelector("#bildPokemon").alt;
aktuelles_Bild_legende = document.querySelector("#textPokemon").innerHTML;

// Ereignis: Wenn mit Maus über Bild
// siehe https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
document.querySelector("#bildPokemon").addEventListener("mouseover", function (){
  document.querySelector("#bildPokemon").src="img/caterpie.gif";
  document.querySelector("#bildPokemon").alt="Bild Caterpie";
  document.querySelector("#textPokemon").innerHTML="Das ist <b>Caterpie</b>";
})
// Ereignis: Wenn mit Maus aus Bild
document.querySelector("#bildPokemon").addEventListener("mouseout", function (){
  document.querySelector("#bildPokemon").src=aktuelles_Bild;
  document.querySelector("#bildPokemon").alt=aktuelles_Bild_alt;
  document.querySelector("#textPokemon").innerHTML=aktuelles_Bild_legende
})
