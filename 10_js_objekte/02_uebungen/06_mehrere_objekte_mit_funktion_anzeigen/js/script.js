let kanton1 = {
  name : 'Bern',
  amtssprache: ['Deutsch', ' Französich'],
  hauptort: 'Bern',
  flaeche: 5959.24,
  bevoelkerung: {
    einwohner : 1034977,
    quote: '2,9 %'
  }
};

/*  Aufgabe:
1. Erstellen Sie für den Kanton Graubünden ein JavaScript-Objekt mit dem Namen "kanton2"
  Das Objekt soll die selben Eigenschaften haben wie "kanton1":
2. Rufen Sie nach der Funktion die Funktion erneut auf, und speichern Sie das Ergebnin in einer zweiten Variablen.
3. Schreiben Sie auch die zweite Variable als Kind-Element in das HTML-Element mit der id="container".
*/

// neues JS-Objekt "kanton2" für den Kanton Graubünden
// die gleichen Eigenschaften wie in "kanton1"
// Werte von https://de.wikipedia.org/wiki/Kanton_Graubünden
// 1.










// Funktionsaufruf um mit einem kanton-Objekt eine HTML-Struktur zu erzeugen und zurückzugeben

function dom_objekt_erzeugen(kanton_param){
// Der Funktionsparameter "kanton_param" enthält jetzt das übergebene Objekt (hier: "kanton1")

// HTML-Struktur innerhalb von JS erzeugen
  let anzeige = document.createElement('ul');
  let kanton_name = document.createElement('li');
  anzeige.appendChild(kanton_name);
  let kanton_sprache = document.createElement('li');
  anzeige.appendChild(kanton_sprache);
  let kanton_hauptort = document.createElement('li');
  anzeige.appendChild(kanton_hauptort);
  let kanton_flaeche = document.createElement('li');
  anzeige.appendChild(kanton_flaeche);
  let kanton_einwohner = document.createElement('li');
  anzeige.appendChild(kanton_einwohner);
  let kanton_quote = document.createElement('li');
  anzeige.appendChild(kanton_quote);


// Informationen sammeln und aufbereiten
  let sprache_liste = document.createElement('ul');
  for(let i = 0; i < kanton_param.amtssprache.length; i++){
    let sprach_listenpunkt = document.createElement('li');
    sprach_listenpunkt.textContent = kanton_param.amtssprache[i];
    sprache_liste.appendChild(sprach_listenpunkt);
  }

// Informationen in HTML-Elemente schreiben
  kanton_name.textContent = "Kantonsname: " + kanton_param.name;
  kanton_sprache.textContent = "Amtsprachen: ";
  kanton_sprache.appendChild(sprache_liste);
  kanton_hauptort.textContent = "Hauptort: " + kanton_param.hauptort;
  kanton_flaeche.textContent = "Fläche: " + kanton_param.flaeche;
  kanton_einwohner.textContent = "Einwohner: " + kanton_param.bevoelkerung.einwohner;
  kanton_quote.textContent = "Arbeitslosenquote: " + kanton_param.bevoelkerung.quote;

  // HTML-Elemente aus JS in das HTML-Element mit der id="container" schreiben.
  let html_container = document.querySelector('#container');
  // "anzeige" als Kindelement in "html_container" schreiben
  // -> Anzeige im Browser
  html_container.appendChild(anzeige);

// Funktionsende
}

// Funktionsaufruf mit kanton1
let k1 = kanton_anzeigen(kanton1);
// Funktionsaufruf mit kanton2
// 2.
