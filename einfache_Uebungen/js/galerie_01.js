// Bildgalerie, Teil 1: Erstes Bild zeigen

// Variablen festlegen
let alleBilder = new Array();
alleBilder = ['bellsprout.gif','bulbasaur.gif','caterpie.gif','charmender.gif'];
let bildTag;

// erstes Bild darstellen
bildTag  = "<img src='img/";
bildTag += alleBilder[0];
bildTag += "' alt='Pokemon'>";
document.querySelector("#bildPlatzhalter").innerHTML = bildTag;
