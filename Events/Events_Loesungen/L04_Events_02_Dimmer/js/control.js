// abwarten, bis  DOM vollständig geladen wurde
document.addEventListener("DOMContentLoaded", function(event) {

  // Variablen definieren
  let dimmer = document.querySelector("#dimmer");
  let display = document.querySelector("#display");
  let lampe = document.querySelector("#lampe");

  // Dimmer auf einen initialen Wert setzen
  // dimmer.value nimmt den Wert des Range-Sliders aus dem HTML
  display.innerHTML = dimmer.value;
  lampe.innerHTML = '💡';

  // einen Event-Listener einrichten, der hört, falls der Slider bewegt wird
  document.querySelector("#dimmer").addEventListener("input", function(){

    // in der Konsole ausgeben, dass der Dimmer bewegt wurde
    console.log("Der Dimmer wurde bewegt!");

    // den aktuellen Wert des Sliders ins HTML übertragen
    display.innerHTML = dimmer.value;

    // je nach Position (Wert) eine bestimmte Anzahl Lampen anzeigen
    if (dimmer.value <= 10){

      lampe.innerHTML = '💡';

    } else if (dimmer.value > 10 && dimmer.value < 20){

      lampe.innerHTML = '💡💡';

    } else if (dimmer.value >= 20 && dimmer.value < 30) {

      lampe.innerHTML = '💡💡💡';

    } else if (dimmer.value >= 30 && dimmer.value < 40) {

      lampe.innerHTML = '💡💡💡💡';

    } else {

      lampe.innerHTML = '💡💡💡💡💡';

    }

  });

});
