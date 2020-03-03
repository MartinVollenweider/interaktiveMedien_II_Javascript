// In 02.02.02 Übersetzer eingebaut

// Attribut herausfinden
let lang = document.querySelector("html").getAttribute("lang")

// Bedingungen prüfen und Resultat in der Konsole ausgeben
if (lang == 'fr') {

  document.querySelector("#ausgabe").innerHTML = 'Bonjour tout le monde';

} else if (lang == 'es') {

  document.querySelector("#ausgabe").innerHTML = 'Hola, Mundo';

} else if (lang == 'de') {

  document.querySelector("#ausgabe").innerHTML = 'Grüezi';

} else {

  document.querySelector("#ausgabe").innerHTML = 'Hello, World';
}
