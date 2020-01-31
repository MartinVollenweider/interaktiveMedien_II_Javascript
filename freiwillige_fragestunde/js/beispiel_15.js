// Variablen festlegen
let alleBilder = new Array();
alleBilder = ['bellsprout.gif','bulbasaur.gif','caterpie.gif','charmander.gif'];
let bildTag;
let zaehler = 0;

// erstes Bild darstellen
zeigeAlleBilder(zaehler);

function zeigeAlleBilder(wert1) {
  bildTag  = "<img src='img/";
  bildTag += alleBilder[wert1];
  bildTag += "' alt='Pokemon'>";
  document.querySelector("#bildPlatzhalter").innerHTML = bildTag;
}

document.querySelector("#weiter").addEventListener("click", function () {
  zaehler = zaehler + 1;
  console.log(zaehler);
  if (zaehler >= alleBilder.length) {
    zaehler = 0;
  }
  zeigeAlleBilder(zaehler);
});

// Neu: retour
document.querySelector("#retour").addEventListener("click", function () {
  zaehler = zaehler - 1;
  console.log(zaehler);
  if (zaehler < 0) {
    zaehler = alleBilder.length -1;
  }
  zeigeAlleBilder(zaehler);
});
