/*  Aufgabe:
  - Erstellen Sie für den Kanton Bern ein JavaScript-Objekt mit dem Namen "kanton1"
    Das Objekt soll folgende Eigenschaften haben:
      name, amtssprache, hauptort, flaeche und für die Eigenschaft bevoelkerung die Untereigenschaften einwohner, quote.
    Die Informationen entnehmen Sie der Seite:
      https://de.wikipedia.org/wiki/Kanton_Bern
  - Rufen Sie in der Konsole des Browsers die einzelnen Objektwerte auf.
*/
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
