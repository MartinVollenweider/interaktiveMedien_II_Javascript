// Formel Umwandlung Celsius / Fahrenheit nachschauen:
// https://www.mathsisfun.com/temperature-conversion.html

// URL-Parameter lesen
let queryString = window.location.search;
console.log(queryString); // ?temperatur=15

// URL Parameter in einzelne Teile auftrennen
let urlParams = new URLSearchParams(queryString);
let celsius = urlParams.get('temperatur')
console.log(celsius);

// C nach F
let celsiusInF = (celsius * 9) / 5 + 32;

// Ausgeben
document.querySelector("#ausgabe").innerHTML = celsius + '°C ist ' + celsiusInF + '°F';