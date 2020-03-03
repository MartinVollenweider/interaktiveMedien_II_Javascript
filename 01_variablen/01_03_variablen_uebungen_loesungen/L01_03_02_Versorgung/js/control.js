
// definieren von Zahlenvariablen alter und Lebenserwartung (maxAlter)
let deinAlter = 23;
let maxAlter = 100;

// definieren von Textvariablen einheit und artikel
let einheit = "Tassen";
let artikel = "Tee";

// definieren der Menge, die pro Tag konsumiert wird
let anzahlProTag = 2;

// ausrechnen des Totalverbrauchs
let totalGebraucht = (anzahlProTag * 365) * (maxAlter - deinAlter);

// Zusammensetzen der Nachricht
let nachricht = 'Du brauchst ' + totalGebraucht + ' ' + einheit + ' ' + artikel + ' bis zum Alter von ' + maxAlter + ' Jahren.';

// Ausgabe in der Konsole
console.log(nachricht);
