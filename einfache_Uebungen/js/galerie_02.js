// Bildgalerie, Teil 2: Erstes Bild zeigen mit Funktion


// Variablen festlegen
let alleBilder = new Array();
alleBilder = ['bellsprout.gif','bulbasaur.gif','caterpie.gif','charmender.gif'];
let bildTag;

// Neu: Funktion
// erstes Bild darstellen
zeigeAlleBilder(0);

function zeigeAlleBilder(wert1) {
  bildTag  = "<img src='img/";
  bildTag += alleBilder[wert1];
  bildTag += "' alt='Pokemon'>";
  document.querySelector("#bildPlatzhalter").innerHTML = bildTag;
}
