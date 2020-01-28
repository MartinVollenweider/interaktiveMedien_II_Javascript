// Variablen festlegen
let alle_bilder = new Array();
alle_bilder = ['bellsprout.gif','bulbasaur.gif','caterpie.gif','charmender.gif'];
let bild_tag;

// Neu: Funktion
// erstes Bild darstellen
zeige_alle_bilder(0);

function zeige_alle_bilder(wert1) {
  bild_tag  = "<img src='img/";
  bild_tag += alle_bilder[wert1];
  bild_tag += "' alt='Pokemon'>";
  document.querySelector("#bild_platzhalter").innerHTML = bild_tag;
}
