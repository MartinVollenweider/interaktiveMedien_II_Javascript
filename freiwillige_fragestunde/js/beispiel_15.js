// Variablen festlegen
let alle_bilder = new Array();
alle_bilder = ['bellsprout.gif','bulbasaur.gif','caterpie.gif','charmander.gif'];
let bild_tag;
let zaehler = 0;

// erstes Bild darstellen
zeige_alle_bilder(zaehler);

function zeige_alle_bilder(wert1) {
  bild_tag  = "<img src='img/";
  bild_tag += alle_bilder[wert1];
  bild_tag += "' alt='Pokemon'>";
  document.querySelector("#bild_platzhalter").innerHTML = bild_tag;
}

document.querySelector("#weiter").onclick = function () {
  zaehler = zaehler + 1;
  console.log(zaehler);
  if (zaehler >= alle_bilder.length) {
    zaehler = 0;
  }
  zeige_alle_bilder(zaehler);
}

// Neu: retour
document.querySelector("#retour").onclick = function () {
  zaehler = zaehler - 1;
  console.log(zaehler);
  if (zaehler < 0) {
    zaehler = alle_bilder.length -1;
  }
  zeige_alle_bilder(zaehler);
}
