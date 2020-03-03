
  // mit window.prompt die Variablen im Browser durch User-Input setzen
  let deinAlter = window.prompt("Gib dein Alter ein.");
  let maxAlter = window.prompt("Wie hoch schätzt du deine Lebenserwartung?");

  // Variablen definieren
  let einheit = "Tassen";
  let artikel = "Tee";
  let anzahlProTag = 2;

  // Totalverbrauch ausrechnen
  let totalGebraucht = (anzahlProTag * 365) * (maxAlter - deinAlter);

  // HTML Spans mittels IDs als Variablen definieren
  let spanTotalGebraucht = document.querySelector('#totalGebraucht');
  let spanEinheit = document.querySelector('#einheit');
  let spanArtikel = document.querySelector('#artikel');
  let spanMaxAlter = document.querySelector('#maxAlter');

  //HTML der Span-Variablen dynamisch füllen
  spanTotalGebraucht.innerHTML = totalGebraucht;
  spanEinheit.innerHTML = einheit;
  spanArtikel.innerHTML = artikel;
  spanMaxAlter.innerHTML = maxAlter;


  // Anhand des Totalverbrauchs den Titel entsprechend einfärben
  // Weitere Möglichkeiten zur CSS-Manipulation:
  // https://www.w3schools.com/jsref/dom_obj_style.asp


  if (totalGebraucht > 10000){

    document.querySelector("#titel").className = 'red';

  } else if (totalGebraucht > 5000){

    document.querySelector("#titel").className = 'blue';

  } else {

    document.querySelector("#titel").className = 'green';

  };