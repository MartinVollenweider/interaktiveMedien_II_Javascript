// Programmiere ein Skript, das dir ausrechnet, in welchem Jahr du wie alt sein wirst.
// Verwende Variablen für dein Geburtsjahr und das aktuelle Jahr.
// Gib dein Resultat in der Konsole in einem Satz aus.
//
// Beispiellösung:
// Im Jahr 2020 werde ich 23 oder 24 Jahre alt sein.

// definieren der Variablen Geburtsjahr und heute
let geburtsjahr = 1996;
let heute  = 2020;

// definieren der Variable alter, die sich aus heute - geburtsjahr berechnet
let alter  = heute - geburtsjahr;

//Ausgabe der Variable alter mittels console.log in einem Satz
console.log('In ' + heute + ' werde ich entweder ' + (alter-1) + ' oder ' + alter + ' Jahre alt sein.');
