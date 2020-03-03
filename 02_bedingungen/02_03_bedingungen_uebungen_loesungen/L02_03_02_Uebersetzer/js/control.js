// Programmiere ein Skript, das jeweils in der Sprache deines Browsers «Hallo Welt»
// respektive «Hello World» ausgibt.

// definiere die Variable language über die aktuelle Browsersprache
// stelle mit slice(0.2) sicher, dass nur die ersten zwei Buchstaben der Spracheinstellung in der Variable gespeichert werden
// -> aus de-CH wird de für Deutsch
let lang = window.navigator.language.slice(0, 2);

// Prüfe verschiedene Sprachparameter und gib anschliessend das jeweilige Resultat in der Konsole aus
if(lang == 'de'){

  console.log('Hallo Welt');

} else if (lang == 'fr') {

  console.log('Bonjour tout le monde');

} else if (lang == 'es') {

  console.log('Hola, Mundo');

} else {

  console.log('Hello, World');
}
