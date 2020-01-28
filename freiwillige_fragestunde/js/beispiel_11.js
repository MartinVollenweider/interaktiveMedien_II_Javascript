// Variablen festlegen
let alle_bilder = new Array();
alle_bilder = ['bellsprout.gif','bulbasaur.gif','caterpie.gif','charmender.gif'];
let bild_tag;

// erstes Bild darstellen
bild_tag  = "<img src='img/";
bild_tag += alle_bilder[0];
bild_tag += "' alt='Pokemon'>";
document.querySelector("#bild_platzhalter").innerHTML = bild_tag;
