// abwarten, bis  DOM vollständig geladen wurde
document.addEventListener("DOMContentLoaded", function(event) {

  // mit window.prompt die Variablen im Browser durch User-Input setzen
  let deinAlter = window.prompt("Gib dein Alter ein.");
  let maxAlter = window.prompt("Wie hoch schätzt du deine Lebenserwartung?");
  
  // Variablen definieren
  let einheit = "Tassen";
  let artikel = "Tee";
  let anzahlProTag = 2;

  // Totalverbrauch ausrechnen
  let totalGebraucht = (anzahlProTag * 365) * (maxAlter - deinAlter);

  // Nachricht zusammensetzen
  let nachricht = 'Du brauchst ' + totalGebraucht + ' ' + einheit + ' ' + artikel + ' bis zum Alter von ' + maxAlter + ' Jahren.';

  // und zum Testen in der Konsole ausgeben
  console.log(nachricht);

  // einen Titel im HTML dynamisch hinzufügen
  let titel = document.createElement("H1");
  titel.innerHTML = "Versorgungsrechner";
  document.body.appendChild(titel);

  // unsere Nachricht ins HTML schreiben
  let meldung = document.createElement("p");
  meldung.innerHTML = nachricht;
  document.body.appendChild(meldung);

});
