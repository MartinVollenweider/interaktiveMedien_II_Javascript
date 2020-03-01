// abwarten, bis  DOM vollständig geladen wurde
document.addEventListener("DOMContentLoaded", function(event) {

  // einen Event-Listener einrichten, der hört, falls der Button gedrückt wird
  document.querySelector("#switch").addEventListener("click", function(){

    // unseren Koch als Variable speichern
    let koch = document.querySelector("#koch");

    // den Koch entweder verstecken oder zeigen
    koch.classList.toggle("hidden");

  });

});
